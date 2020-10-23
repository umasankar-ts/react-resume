let cacheData ="appV1"
this.addEventListener("install",(event)=>{
	event.waitUntil(
		caches.open(cacheData).then((cache)=>{
			cache.addAll([
				'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',				
				'https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap',
				'/fonts/line-icons.css',
				'/fonts/LineIcons.ttf?tc3uo0',
				'/fonts/LineIcons.woff?tc3uo0',
				'/images/',
				'/images/fashion/',
				'/manifest.json',
				'/static/js/main.chunk.js', 
				'/static/js/1.chunk.js',
				'/static/js/0.chunk.js',
				'/static/js/bundle.js',
				'/index.html',
				'/home',
				'/about',
				'/experience',
				'/education',
				'/qualification',
				'/portfolio',
				'/hobbies',
				'/'
			])
		})
	)
})

this.addEventListener("fetch",(event)=>{
	if(!navigator.onLine){
		event.respondWith(
			caches.match(event.request).then((response)=>{
				if(response){
					return response
				}
			})
		)
	}	
})