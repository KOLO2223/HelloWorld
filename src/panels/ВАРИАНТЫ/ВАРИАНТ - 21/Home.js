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

		





class Example extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        country: '',
        activeView: 'profile'
      }
    }

    render () {
      return (
        <Root activeView={this.state.activeView}>
          <View activePanel="profile" id="profile">
            <Panel id="profile">
              <PanelHeader>
                555566
              </PanelHeader>
              <FormLayout>
                <SelectMimicry
                  top="77778"
                  placeholder="255"
                  onClick={() => this.setState({ activeView: 'countries' })}
                >{this.state.country}</SelectMimicry>

                <SelectMimicry
                  top="77787"
                  placeholder="55555"
                  disabled
                />
              </FormLayout>
            </Panel>
          </View>
          <View activePanel="countries" id="countries">
            <Panel id="countries">
              <PanelHeader>
                78878
              </PanelHeader>
              <Group>
                <List>
                  <Cell
                    onClick={() => this.setState({ country: '777', activeView: 'profile' })}
                    asideContent={this.state.country === '' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    ������
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: '������', activeView: 'profile' })}
                    asideContent={this.state.country === '������' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    ������
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: '������', activeView: 'profile' })}
                    asideContent={this.state.country === '������' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    ������
                  </Cell>
                </List>
              </Group>
            </Panel>
          </View>
        </Root>
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
