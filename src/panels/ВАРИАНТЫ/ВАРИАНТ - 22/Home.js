import React from 'react';
import PropTypes from 'prop-types';



import { InfoRow, TouchableOpacity, VStack, HStack, Box, IconButton, Center, Tabbar, TabbarItem, SubnavigationBar, SplitLayout, SubnavigationButton, PanelHeaderButton, PanelHeaderContext, ModalDismissButton, PopoutWrapper, Example, SplitLayout, CellButton, Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeaderBack, List, PanelHeaderButton, PanelHeaderContext, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';



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

		





<View activePanel="test">
  <Panel id="test">
    <PanelHeader>Title</PanelHeader>
    <Div>
      <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>Title 1 semibold</Title>
      <Title level="1" weight="bold" style={{ marginBottom: 16 }}>Title 1 bold</Title>
      <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>Title 1 heavy</Title>
      <Title level="2" weight="regular" style={{ marginBottom: 16 }}>Title 2 regular</Title>
      <Title level="2" weight="semibold" style={{ marginBottom: 16 }}>Title 2 semibold</Title>
      <Title level="2" weight="heavy" style={{ marginBottom: 16 }}>Title 2 heavy</Title>
      <Title level="3" weight="regular" style={{ marginBottom: 16 }}>Title 3 regular</Title>
      <Title level="3" weight="medium" style={{ marginBottom: 16 }}>Title 3 medium</Title>
      <Title level="3" weight="semibold">Title 3 semibold</Title>
    </Div>
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
