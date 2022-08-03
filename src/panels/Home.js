import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";

import { PanelHeaderButton, PanelHeaderContext, ModalDismissButton, PopoutWrapper, Example, SplitLayout, CellButton, Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

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

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
				
				
				

  
<View activePanel="native-select">
  <Panel id="native-select">
    <PanelHeader>NativeSelect</PanelHeader>
    <Group>
      <FormItem top="Выберите пол">
        <NativeSelect>
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </NativeSelect>
      </FormItem>
    </Group>

	<Group>
      <FormItem>
        <Checkbox defaultChecked>Я участвую в сборе</Checkbox>
        <Checkbox description="Все пользователи получат уведомление">
          Закрепить сообщение
        </Checkbox>
        <Checkbox checked disabled>
          Автоматически зачислять на карту
        </Checkbox>
      </FormItem>
    </Group>

<div style={{ padding: 20 }}>
  <Title level="1" style={{ marginBottom: 16 }}>
    Title 1
  </Title>
  <Title level="2" style={{ marginBottom: 16 }}>
    Title 2
  </Title>
  <Title level="3">Title 3</Title>
</div>



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


	<Cell mode="selectable">
        Артур 
    </Cell>
	<Cell mode="selectable">
        Игорь Федоров
    </Cell>



	<FormLayout>
        <div>
          <Radio name="radio" value="1" description="Lorem ipsum dolor sit amet, consectetur." defaultChecked>First</Radio>
          <Radio name="radio" value="2">Second</Radio>
          <Radio name="radio" value="3" disabled>Third (disabled)</Radio>
        </div>
    </FormLayout>


<View activePanel="select">
  <Panel id="select">
<Select placeholder="TEXT">
  <option value="m">TEXT1</option>
  <option value="f">TEXT2</option>
</Select>
  </Panel>
</View>





  </Panel>
</View>









  
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
