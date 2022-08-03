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
			</Div>
		</Group>
	</Panel>
);

const CustomPopout = withAdaptivity(
	({ onClose, viewWidth }) => {
	  return (
		<PopoutWrapper onClick={onClose}>
		  <div
			style={{
			  backgroundColor: "var(--background_content)",
			  borderRadius: 8,
			  position: "relative",
			  padding: "12px",
			}}
		  >
			<h4>TEXT</h4>
			{viewWidth >= ViewWidth.SMALL_TABLET && (
			  <ModalDismissButton onClick={onClose} />
			)}
		  </div>
		</PopoutWrapper>
	  );
	},
	{
	  viewWidth: true,
	}
  );
  
  const Example = () => {
	const [popout, setPopout] = React.useState(null);
  
	const onClick = () =>
	  setPopout(<CustomPopout onClose={() => setPopout(null)} />);
  
	return (
	  <SplitLayout popout={popout}>
		<SplitCol>
		  <View activePanel="popout">
			<Panel id="popout">
			  <PanelHeader>ModalDismissButton</PanelHeader>
			  <Group>
				<CellButton onClick={onClick}>TEXT</CellButton>
			  </Group>
			</Panel>
		  </View>
		</SplitCol>
	  </SplitLayout>
	);
  };
  
  <Example />;

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
