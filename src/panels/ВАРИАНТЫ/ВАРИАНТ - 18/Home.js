import React from 'react';
import PropTypes from 'prop-types';



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

		




  <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>
        InfoRow
      </PanelHeader>
      <Group>
        <SimpleCell>
          <InfoRow header="21121212">
            3000.
          </InfoRow>
        </SimpleCell>
      </Group>
      <Group>
        <Header mode="secondary">78778</Header>
        <SimpleCell multiline>
          <InfoRow header="8888">
            30 1993
          </InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="8787">
            4777
          </InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="454">
            5656
          </InfoRow>
        </SimpleCell>
      </Group>
    </Panel>
  </View>




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
