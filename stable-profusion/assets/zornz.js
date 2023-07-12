         function conductSearch() {
           const searchInput = document.getElementById('search-input');
           const query = searchInput.value.trim();
         
           if (query !== '') {
             const baseUrl = 'https://search.brave.com'; // Hardcoded URL
             const searchUrl = baseUrl + '/search?q=' + encodeURIComponent(query);
             window.location.href = searchUrl;
           }
         }
         

         let urlHistory = [];
         
         function openNewWebView(inputId) {
             const urlInput = document.getElementById(inputId);
             const url = urlInput.value.trim();
         
             if (url !== '') {
                 if (inputId === 'url-input' || inputId === 'url-input1') {
                     // Update the URL in the current web view using JavaScript
                     window.location.href = url;
                 } else {
                     // Open the URL in a new web view
                     window.open(url);
                 }
                 // Add the URL to the history array
                 addToUrlHistory(url);
             }
         }
         
         function addToUrlHistory(url) {
             // Check if the URL is already in the history
             const index = urlHistory.indexOf(url);
             if (index !== -1) {
                 // If the URL exists, remove it from its current position
                 urlHistory.splice(index, 1);
             }
             // Add the URL at the beginning of the history array
             urlHistory.unshift(url);
             // Update the select element with the new history
             updateUrlHistorySelect();
         }
         
         function updateUrlHistorySelect() {
             const urlHistorySelect = document.getElementById('url-history');
             // Clear the select element
             urlHistorySelect.innerHTML = '<option value="">History</option>';
             // Add options for each URL in the history array
             for (let i = 0; i < urlHistory.length; i++) {
                 const url = urlHistory[i];
                 const option = document.createElement('option');
                 option.value = url;
                 option.text = url;
                 urlHistorySelect.appendChild(option);
             }
         }
         
         function loadURLFromHistory() {
             const urlHistorySelect = document.getElementById('url-history');
             const selectedUrl = urlHistorySelect.value;
             if (selectedUrl !== '') {
                 // Update the URL input field with the selected URL
                 const urlInput = document.getElementById('url-input');
                 urlInput.value = selectedUrl;
             }
         }

         function openNewWebView(inputId) {
         const urlInput = document.getElementById(inputId);
         const url = urlInput.value.trim();
         
         if (url !== '') {
         if (inputId === 'url-input' || inputId === 'url-input1') {
         // Update the URL in the current web view using JavaScript
         window.location.href = url;
         } else {
         // Open the URL in a new web view
         window.open(url);
         }
         }
         }
         
         // Function to load SSB (Single Site Browser)
         function loadSSB(inputId) {
         const ssbUrlInput = document.getElementById(inputId);
         const ssbUrl = ssbUrlInput.value;
         const ssbContainer = document.getElementById('ssb-container');
         const ssbWrapper = document.createElement('div');
         ssbWrapper.className = 'ssb-wrapper'; // Add the CSS class for styling
         const iframe = document.createElement('iframe');
         iframe.src = ssbUrl;
         iframe.style.width = '97%';
         iframe.style.height = '120%';
         const urlCloseContainer = document.createElement('div');
         urlCloseContainer.className = 'url-close-container'; // Add the CSS class for styling
         const closeButton = document.createElement('button');
         closeButton.innerHTML = `Close ${ssbUrl}`;
         closeButton.onclick = function () {
           ssbWrapper.remove();
         };
         ssbWrapper.appendChild(iframe);
         urlCloseContainer.appendChild(closeButton);
         ssbWrapper.appendChild(urlCloseContainer);
         ssbContainer.appendChild(ssbWrapper); // Append ssbWrapper to ssbContainer
         ssbUrlInput.value = '';
         ssbUrlInput.value = ssbUrl;
         }
         
         function toggleFullscreen() {
         const currentWindow = window.parent;
         if (currentWindow.document.documentElement.requestFullscreen) {
           currentWindow.document.documentElement.requestFullscreen();
         } else if (currentWindow.document.documentElement.mozRequestFullScreen) {
           currentWindow.document.documentElement.mozRequestFullScreen();
         } else if (currentWindow.document.documentElement.webkitRequestFullscreen) {
           currentWindow.document.documentElement.webkitRequestFullscreen();
         } else if (currentWindow.document.documentElement.msRequestFullscreen) {
           currentWindow.document.documentElement.msRequestFullscreen();
         }
         }
         
         function goBack() {
         window.history.back();
         }
         
         function goForward() {
         window.history.forward();
         }
         
         function stop() {
         const currentWindow = window.parent;
         currentWindow.stop();
         }
         
         function reload() {
         const currentWindow = window.parent;
         currentWindow.location.reload();
         }
         
         function inspectElement() {
         const currentWindow = window.parent;
         currentWindow.document.documentElement.classList.add('inspect-element');
         }
         
