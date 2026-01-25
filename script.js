async function getAppAccessToken() {
  const response = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: 'qwdt9lf5w72b16aa67zddh70e6ck64',
      client_secret: 's0anib2pvhob7u2r3dya6c1f9alzsj',
      grant_type: 'client_credentials'
    })
  });
  
  const data = await response.json();
  return data.access_token;
}