import React from 'react';
import PropTypes from 'prop-types';

import { VStack, HStack, Box, IconButton, Center, Tabbar, TabbarItem, SubnavigationBar, SplitLayout, SubnavigationButton, PanelHeaderButton, PanelHeaderContext, ModalDismissButton, PopoutWrapper, Example, SplitLayout, CellButton, Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

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


const Example = () => {
	const instState = [{
	  title: "Code",
	  isCompleted: true
	}, {
	  title: "Meeting with team at 9",
	  isCompleted: false
	}, {
	  title: "Check Emails",
	  isCompleted: false
	}, {
	  title: "Write an article",
	  isCompleted: false
	}];
	const [list, setList] = React.useState(instState);
	const [inputValue, setInputValue] = React.useState("");
	const toast = useToast();
  
	const addItem = title => {
	  if (title === "") {
		toast.show({
		  title: "Please Enter Text",
		  status: "warning"
		});
		return;
	  }
  
	  setList(prevList => {
		return [...prevList, {
		  title: title,
		  isCompleted: false
		}];
	  });
	};
  
	const handleDelete = index => {
	  setList(prevList => {
		const temp = prevList.filter((_, itemI) => itemI !== index);
		return temp;
	  });
	};
  
	const handleStatusChange = index => {
	  setList(prevList => {
		const newList = [...prevList];
		newList[index].isCompleted = !newList[index].isCompleted;
		return newList;
	  });
	};
  
	return <Center w="100%">
<View>
<Group>
		<Box maxW="300" w="100%">
		  <Heading mb="2" size="md">
			Wednesday
		  </Heading>
		  <VStack space={4}>
			<HStack space={2}>
			  <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
			  <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
			  addItem(inputValue);
			  setInputValue("");
			}} />
			</HStack>
			<VStack space={2}>
			  {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
				  <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
				  <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
				color: item.isCompleted ? "gray.400" : "coolGray.800"
			  }} _dark={{
				color: item.isCompleted ? "gray.400" : "coolGray.50"
			  }} onPress={() => handleStatusChange(itemI)}>
					{item.title}
				  </Text>
				  <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
				</HStack>)}
			</VStack>
		  </VStack>
		</Box>
	  </Center>;
  };
  </Group>
</View>



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
