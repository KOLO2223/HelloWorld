import React from 'react';

import PropTypes from 'prop-types';


import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon16Dropdown from '@vkontakte/icons/dist/16/notifications';

import { TouchableOpacity, VStack, HStack, Box, IconButton, Center, Tabbar, TabbarItem, SubnavigationBar, SplitLayout, SubnavigationButton, PanelHeaderButton, PanelHeaderContext, ModalDismissButton, PopoutWrapper, Example, SplitLayout, CellButton, Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeaderBack, List, PanelHeaderButton, PanelHeaderContext, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';



const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		




class Example extends React.Component {

  constructor () {
    this.state = {
      contextOpened: true,
      mode: 'all'
    }
    this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

  toggleContext () {
    this.setState({ contextOpened: !this.state.contextOpened });
  }

  select (e) {
    const mode = e.currentTarget.dataset.mode;
    this.setState({ mode });
    requestAnimationFrame(this.toggleContext);
  }

  render () {

    return (
      <View activePanel="context">
        <Panel id="context">
          <PanelHeader
            left={<PanelHeaderBack />}
            right={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>}
          >
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon28UsersOutline />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon28SettingsOutline />}
                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </PanelHeaderContext>
        </Panel>
      </View>
    )
  }
}

<Example />




<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
