import React from 'react';
import PropTypes from 'prop-types';

import { Tabbar, TabbarItem, SubnavigationBar, SplitLayout, SubnavigationButton, PanelHeaderButton, PanelHeaderContext, ModalDismissButton, PopoutWrapper, Example, SplitLayout, CellButton, Textarea, StyleSheet, TouchableOpacity, Text, Input, setShown, shown, Dropdown, Title, NativeSelect, FormLayout, Radio, Tooltip, SplitCol, ModalRoot, ModalPage, ModalPageHeader, AdaptivityProvider, SimpleCell, Caption, Checkbox, FormItem, ButtonGroup, Select, Root, TextTooltip, View, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

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

const Example = withAdaptivity(
	({ viewWidth }) => {
	  const platform = usePlatform();
	  const [activeStory, setActiveStory] = React.useState("profile");
	  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	  const isDesktop = viewWidth >= ViewWidth.TABLET;
	  const hasHeader = platform !== VKCOM;
  
	  return (
		<SplitLayout
		  header={hasHeader && <PanelHeader separator={false} />}
		  style={{ justifyContent: "center" }}
		>
		  {isDesktop && (
			<SplitCol fixed width={280} maxWidth={280}>
			  <Panel>
				{hasHeader && <PanelHeader />}
				<Group>
				  <Cell
					disabled={activeStory === "feed"}
					style={
					  activeStory === "feed"
						? {
							backgroundColor: "var(--button_secondary_background)",
							borderRadius: 8,
						  }
						: {}
					}
					data-story="feed"
					onClick={onStoryChange}
					before={<Icon28NewsfeedOutline />}
				  >
					feed
				  </Cell>
				  <Cell
					disabled={activeStory === "services"}
					style={
					  activeStory === "services"
						? {
							backgroundColor: "var(--button_secondary_background)",
							borderRadius: 8,
						  }
						: {}
					}
					data-story="services"
					onClick={onStoryChange}
					before={<Icon28ServicesOutline />}
				  >
					services
				  </Cell>
				  <Cell
					disabled={activeStory === "messages"}
					style={
					  activeStory === "messages"
						? {
							backgroundColor: "var(--button_secondary_background)",
							borderRadius: 8,
						  }
						: {}
					}
					data-story="messages"
					onClick={onStoryChange}
					before={<Icon28MessageOutline />}
				  >
					messages
				  </Cell>
				  <Cell
					disabled={activeStory === "clips"}
					style={
					  activeStory === "clips"
						? {
							backgroundColor: "var(--button_secondary_background)",
							borderRadius: 8,
						  }
						: {}
					}
					data-story="clips"
					onClick={onStoryChange}
					before={<Icon28ClipOutline />}
				  >
					clips
				  </Cell>
				  <Cell
					disabled={activeStory === "profile"}
					style={
					  activeStory === "profile"
						? {
							backgroundColor: "var(--button_secondary_background)",
							borderRadius: 8,
						  }
						: {}
					}
					data-story="profile"
					onClick={onStoryChange}
					before={<Icon28UserCircleOutline />}
				  >
					profile
				  </Cell>
				</Group>
			  </Panel>
			</SplitCol>
		  )}
  
		  <SplitCol
			animate={!isDesktop}
			spaced={isDesktop}
			width={isDesktop ? "560px" : "100%"}
			maxWidth={isDesktop ? "560px" : "100%"}
		  >
			<Epic
			  activeStory={activeStory}
			  tabbar={
				!isDesktop && (
				  <Tabbar>
					<TabbarItem
					  onClick={onStoryChange}
					  selected={activeStory === "feed"}
					  data-story="feed"
					  text="TEXT112"
					>
					  <Icon28NewsfeedOutline />
					</TabbarItem>
					<TabbarItem
					  onClick={onStoryChange}
					  selected={activeStory === "services"}
					  data-story="services"
					  text="TEXT114"
					>
					  <Icon28ServicesOutline />
					</TabbarItem>
					<TabbarItem
					  onClick={onStoryChange}
					  selected={activeStory === "messages"}
					  data-story="messages"
					  indicator={
						<Counter size="s" mode="prominent">
						  12
						</Counter>
					  }
					  text="TEXT116"
					>
					  <Icon28MessageOutline />
					</TabbarItem>
					<TabbarItem
					  onClick={onStoryChange}
					  selected={activeStory === "clips"}
					  data-story="clips"
					  text="TEXT1167"
					>
					  <Icon28ClipOutline />
					</TabbarItem>
					<TabbarItem
					  onClick={onStoryChange}
					  selected={activeStory === "profile"}
					  data-story="profile"
					  indicator={<Badge mode="prominent" />}
					  text="TEXT1124"
					>
					  <Icon28UserCircleOutline />
					</TabbarItem>
				  </Tabbar>
				)
			  }
			>
			  <View id="feed" activePanel="feed">
				<Panel id="feed">
				  <PanelHeader before={<PanelHeaderBack />}>TEXT1122121</PanelHeader>
				  <Group style={{ height: "1000px" }}>
					<Placeholder
					  icon={<Icon56NewsfeedOutline width={56} height={56} />}
					/>
				  </Group>
				</Panel>
			  </View>
			  <View id="services" activePanel="services">
				<Panel id="services">
				  <PanelHeader before={<PanelHeaderBack />}>TEXT11221215</PanelHeader>
				  <Group style={{ height: "1000px" }}>
					<Placeholder
					  icon={<Icon28ServicesOutline width={56} height={56} />}
					></Placeholder>
				  </Group>
				</Panel>
			  </View>
			  <View id="messages" activePanel="messages">
				<Panel id="messages">
				  <PanelHeader before={<PanelHeaderBack />}>
				  TEXT11245465564
				  </PanelHeader>
				  <Group style={{ height: "1000px" }}>
					<Placeholder
					  icon={<Icon28MessageOutline width={56} height={56} />}
					></Placeholder>
				  </Group>
				</Panel>
			  </View>
			  <View id="clips" activePanel="clips">
				<Panel id="clips">
				  <PanelHeader before={<PanelHeaderBack />}>TEXT11258998</PanelHeader>
				  <Group style={{ height: "1000px" }}>
					<Placeholder
					  icon={<Icon28ClipOutline width={56} height={56} />}
					></Placeholder>
				  </Group>
				</Panel>
			  </View>
			  <View id="profile" activePanel="profile">
				<Panel id="profile">
				  <PanelHeader before={<PanelHeaderBack />}>TEXT112445879</PanelHeader>
				  <Group style={{ height: "1000px" }}>
					<Placeholder
					  icon={<Icon28UserCircleOutline width={56} height={56} />}
					></Placeholder>
				  </Group>
				</Panel>
			  </View>
			</Epic>
		  </SplitCol>
		</SplitLayout>
	  );
	},
	{
	  viewWidth: true,
	}
  );
  
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
