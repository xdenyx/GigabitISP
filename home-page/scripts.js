document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const logo = document.querySelector('.logo'); 
    const companyName = document.querySelector('.logo_name'); 

    function loadPage(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
                evalScripts();
            }
        };
        xhr.send();
    }

    function evalScripts() {
        var scripts = document.getElementById('content').getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerText);
        }
    }

    logo.addEventListener('click', function(event) {
        event.preventDefault();

        const pageUrl = 'main.html'; 
        loadPage(pageUrl);
    });

    companyName.addEventListener('click', function(event) {
        event.preventDefault(); 

        const pageUrl = 'main.html'; 
        loadPage(pageUrl);
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const pageUrl = link.getAttribute('href');
            loadPage(pageUrl);
        });
    });
    const connectLinks = document.querySelectorAll('.connect');

    connectLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
    
            const targetPage = this.getAttribute('href');
    
            fetch(targetPage)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error fetching page:', error);
                });
            window.history.pushState({ page: targetPage }, null, targetPage);
        });
    });
    

    const connectLinks_ = document.querySelectorAll('.connect_');
    
    connectLinks_.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetPage = this.getAttribute('href');
            
            fetch(targetPage)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching page:', error);
            });
        });
    });

    const login = document.querySelector('.login'); 

    login.addEventListener('click', function(event) {
        event.preventDefault(); 

        const pageUrl = 'signin.html';
        loadPage(pageUrl);
    });
});



