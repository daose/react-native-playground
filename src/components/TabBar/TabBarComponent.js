import React, { Component, PropTypes } from 'react';
import Tabs from 'react-native-tabs';
import { DefaultRenderer, Actions, Util, TabbedView } from 'react-native-router-flux';
import { Image, View, Text } from 'react-native';
import styles from './styles';


export default class TabBarComponent extends Component {
	static propTypes = {
		navigationState: PropTypes.object,
		tabIcon: PropTypes.any,
		onNavigate: PropTypes.func,
		unmountScenes: PropTypes.bool,
		pressOpacity: PropTypes.number,
		hideOnChildTabs: PropTypes.bool,
	};

	static onSelect(el) {
		if (!Actions[el.props.name]) {
			throw new Error(
				`No action is defined for name=${el.props.name} ` +
				`actions: ${JSON.stringify(Object.keys(Actions))}`);
		}
		if (typeof el.props.onPress === 'function') {
			el.props.onPress();
		} else {
			Actions[el.props.name]();
		}
	}

    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

	renderScene(navigationState) {
		return (
			<DefaultRenderer
				key={navigationState.key}
				onNavigate={this.props.onNavigate}
				navigationState={navigationState}
			/>
		);
	}

	render() {
		const state = this.props.navigationState;
		const selected = state.children[state.index];

		const hideTabBar = this.props.unmountScenes ||
			Util.deepestExplicitValueForKey(state, 'hideTabBar') ||
			(this.props.hideOnChildTabs && Util.deepestExplicitValueForKey(selected, 'tabs'));

		const contents = state.children.filter(el => el.icon).map((el) => {let Icon = el.icon; return(<Icon {...this.props} {...el}/>);});

		return (
			<View style={{ flex: 1 }}>
				<TabbedView
					navigationState={this.props.navigationState}
					style={{ flex: 1 }}
					renderScene={this.renderScene}/>
                    {!hideTabBar && state.children.filter(el => el.icon).length > 0 && (
                        <Tabs
                            onSelect={TabBarComponent.onSelect} {...state}
                            selected={selected.sceneKey}>
                            {contents}
                        </Tabs>
                    )}
			</View>
		);
	}
}
