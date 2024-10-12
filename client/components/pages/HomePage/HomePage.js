import React, { useEffect } from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Container from 'react-bulma-companion/lib/Container';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import { Box, Column, Columns, Table } from 'react-bulma-companion';

export default function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  const dataTest1 = [
    {
      "_id": "67079062b06949ee0581ec1d",
      "index": 0,
      "name": "Meagan Berg",
      "email": "meaganberg@flumbo.com",
      "note": "Velit reprehenderit ut commodo eu culpa voluptate pariatur aliquip. Do tempor eiusmod laboris deserunt. Labore sint officia tempor duis magna nisi nisi aliquip deserunt. Ea aliqua aliqua eu mollit ipsum irure fugiat labore.\r\n",
      "registered": "2024-02-05T05:47:08 -07:00",
      "room": 16,
      "item": [
        {
          "label": "nulla",
          "qty": 6
        },
        {
          "label": "aliqua",
          "qty": 1
        },
        {
          "label": "non",
          "qty": 8
        },
        {
          "label": "exercitation",
          "qty": 5
        }
      ]
    },
    {
      "_id": "6707906250ca25b8aff0fbc6",
      "index": 1,
      "name": "Anthony Buck",
      "email": "anthonybuck@flumbo.com",
      "note": "Amet irure irure ut officia. Incididunt veniam minim nisi ea sit amet non ut mollit. Mollit minim qui Lorem mollit sunt et magna irure. Sint qui ad nostrud voluptate fugiat et magna excepteur sunt. Excepteur elit aute esse est fugiat labore Lorem nisi cupidatat laboris deserunt exercitation qui. Ex minim elit dolore incididunt sit mollit labore. Laboris nulla minim sit tempor quis aute consectetur minim aliqua officia ad.\r\n",
      "registered": "2024-04-08T12:19:58 -07:00",
      "room": 39,
      "item": [
        {
          "label": "dolor",
          "qty": 5
        },
        {
          "label": "officia",
          "qty": 3
        },
        {
          "label": "eiusmod",
          "qty": 7
        },
        {
          "label": "enim",
          "qty": 6
        }
      ]
    },
    {
      "_id": "670790621951f7a1e05b42d0",
      "index": 2,
      "name": "Mullen Mcbride",
      "email": "mullenmcbride@flumbo.com",
      "note": "Nisi nulla nulla culpa elit. Anim deserunt exercitation officia reprehenderit aliqua fugiat. Velit Lorem amet dolore ullamco cupidatat excepteur ad id magna excepteur cupidatat sunt.\r\n",
      "registered": "2024-06-27T05:37:03 -07:00",
      "room": 66,
      "item": [
        {
          "label": "anim",
          "qty": 0
        },
        {
          "label": "occaecat",
          "qty": 8
        },
        {
          "label": "ex",
          "qty": 1
        },
        {
          "label": "esse",
          "qty": 5
        }
      ]
    }
  ]

  // run in window for dev build, npm run build:dev script not working
  // npx webpack --mode=development --config ./client/config/webpack.dev.config.js

  return (
    <Section>
      <Container>
      <Section>
          <Title size='4'>Dashboard</Title> 
          <Title subtitle size='6'>review info</Title> 
        </Section>
        {/* <div class='is-flex'>
        <div class="box" style={{}}>helo</div>
        <div class="box" style={{}}>helo</div>
        <div class="box" style={{}}>helo</div>
          </div> */}

        {/* <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div> */}

        <Columns textAlign='center'>
          <Column>
            <Box>
              <div class='is-flex is-justify-content-space-between'>
                <div> 
                   <Title size='4'>5</Title> 
                   <Title subtitle size='6'>Avilable item</Title> 
                </div>
                <div> 
                   <Title size='4'>3</Title> 
                   <Title subtitle size='6'>missing item</Title> 
                </div>
              </div>
            </Box>
          </Column>
          <Column>
            <Box>
              <div class='is-flex is-justify-content-space-between'>
                <div> 
                   <Title size='4'>3</Title> 
                   <Title subtitle size='6'>assignee</Title> 
                </div>
                <div> 
                   <Title size='4'>4</Title> 
                   <Title subtitle size='6'>task done</Title> 
                </div>
              </div>
            </Box>
          </Column>
          <Column>
            <Box>
              <div class='is-flex is-justify-content-space-between'>
                <div> 
                   <Title size='4'>5</Title> 
                   <Title subtitle size='6'>Outgoing request</Title> 
                </div>
                <div> 
                   <Title size='4'>3</Title> 
                   <Title subtitle size='6'>request done</Title> 
                </div>
              </div>
            </Box>
          </Column>
        </Columns>
        <Section>
          <Title size='4'>Task Assign</Title> 
          <Title subtitle size='6'>view the task of each staff</Title> 
        </Section>
        {/* get item from ordering or just get from staff storage */}

        <div class="table-container">
          <Table width={"100%"}>
            <thead>
              <tr>
                <th><abbr title="index">no</abbr></th>
                <th>name</th>
                <th>email</th>
                {/* <th><abbr title="Quantity">qty</abbr></th> */}
                <th>note</th>
                <th>registered</th>
                <th>room</th>
                <th>item</th>
              </tr>
            </thead>
            <tbody>
              {/* this should automatically created row */}
              {dataTest1.map((i) => <tr>
                <th>{i?.index}</th>
                {/* <td>
                  <a
                    href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                    title="Leicester City F.C."
                  >Leicester City</a>
                </td> */}
                <td>{i?.name}</td>
                <td>{i?.email}</td>
                <td>{i?.note}</td>
                <td>{i?.registered}</td>
                <td>{i?.room}</td>
                {/* <td>{i?.item[0].label}</td> */}
                <td>{i?.item.map((v) => v.label + `(${v.qty}) \n`)}</td>
              </tr>)}
            </tbody>
          </Table>
        </div>
      </Container>
    </Section>
  );
}
