const firebaseHost =
  'https://us-central1-vtechmxh.cloudfunctions.net/widgets/api/v1';

const pushToken = (fcmToken: string, userId: string) => {
  return new Promise((res, rej) => {
    console.log('11111', {
      token: fcmToken,
      uid: userId,
    });
    fetch(firebaseHost + '/pushToken', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: fcmToken,
        uid: userId,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('pushToken done', responseJson);
        res(responseJson);
      })
      .catch(error => {
        console.log('pushToken:err', error);
        rej(false);
      });
  });
};

const removeToken = (fcmToken: string, userId: string) => {
  return new Promise((res, rej) => {
    fetch(firebaseHost + '/removeToken', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: fcmToken,
        uid: userId,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        res(responseJson);
      })
      .catch(error => {
        //console.log(error);
        rej(false);
      });
  });
};

const changeToken = (oldToken: string, newToken: string, userId: string) => {
  return new Promise((res, rej) => {
    fetch(firebaseHost + '/changeToken', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oldToken,
        newToken,
        uid: userId,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        res(responseJson);
      })
      .catch(error => {
        //console.log(error);
        rej(false);
      });
  });
};

export default {
  pushToken,
  removeToken,
  changeToken,
};
