import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import ManageExternalStorage from 'react-native-manage-external-storage';

const AllFileAccess = () => {
  async function AskPermission() {
    await ManageExternalStorage.checkAndGrantPermission(
      err => {
        setResult(false);
      },
      res => {
        setResult(true);
      },
    );
  }

  useEffect(() => {
    AskPermission();
  }, []);

  return (
    <View>
      <Text>Manage Files Permission</Text>
    </View>
  );
};

export default AllFileAccess;
