import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";

import { Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

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









		<Group>
    
	<View activePanel="panel">
	  <Panel id="panel">
		<PanelHeader>Radio</PanelHeader>
		<Group>
		  <FormLayout>
			<FormItem top="Откуда списать">
			  <Radio
				name="radio"
				value="1"
				description="Баланс 7320"
				defaultChecked
			  >
				VK Pay
			  </Radio>
			  <Radio name="radio" value="2">
				Mastercard **** 1234
			  </Radio>
			  <Radio name="radio" value="3">
				Visa **** 4321
			  </Radio>
			</FormItem>
		  </FormLayout>
		</Group>
	  </Panel>
	</View>
		
		</Group>














		

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
