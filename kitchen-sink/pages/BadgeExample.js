import React from 'react';
import {
  Container,
  Badge,
  Group,
} from 'amazeui-touch';

const styles = [
  null,
  'primary',
  'secondary',
  'success',
  'warning',
  'alert',
  'dark',
];

class BadgeExample extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="默认形状"
        >
          {
            styles.map((amStyle, i) => {
              return (
                <Badge
                  amStyle={amStyle}
                  key={i}
                >
                  {amStyle || 'default'}
                </Badge>
              );
            })
          }
        </Group>

        <Group
          header="Rounded"
        >
        {
          styles.map((amStyle, i) => {
            return (
              <Badge
                amStyle={amStyle}
                key={i}
                rounded
              >
                {i}
              </Badge>
            );
          })
        }
        </Group>
      </Container>
    );
  }
}

export default  BadgeExample;
