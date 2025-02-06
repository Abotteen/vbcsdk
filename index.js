VonageDialer.init({}, (dialer) => {
  dialer.setOnDialerEvent((event) => {
    const logDiv = document.createElement("div");
    logDiv.innerHTML = '<b>Event:</b> ' + JSON.stringify(event);
    logDiv.style.paddingBottom = '10px';
    document.body.appendChild(logDiv);
  });

  // dialer.setVisibility(true);
});
