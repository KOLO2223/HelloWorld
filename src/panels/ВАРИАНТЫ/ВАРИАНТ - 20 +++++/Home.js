import React from 'react';
import PropTypes from 'prop-types';



import { Panel, View, Select, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';



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

		



<View activePanel="select">
  <Panel id="select">
<Select placeholder="TEXT">
  <option value="m">TEXT1</option>
  <option value="f">TEXT2</option>
</Select>
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
