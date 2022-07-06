import React from 'react';
import {Card, IconButton, Text} from 'react-native-paper';
import IoIcons from 'react-native-vector-icons/Ionicons';

function StackNavbar() {
  return (
    <Card>
      <IconButton
        icon={() => {
          return <IoIcons name="back" />;
        }}
      />
    </Card>
  );
}

export default React.memo(StackNavbar);
