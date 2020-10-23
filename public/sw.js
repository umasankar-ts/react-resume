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
				'/manifest.json',
				'/static/js/main.f05bece2.chunk.js',				
				'/static/js/main.chunk.js', 
				'/static/js/2.ade3555b.chunk.js',
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
				'/',
				'/images/android.png',
				'/images/anim-img1.webp',
				'/images/anim-img2.webp',
				'/images/anim-img3.webp',
				'/images/anim-img4.webp',
				'/images/app-installation.svg',
				'/images/bg-pattern.png',
				'/images/company1.png',
				'/images/company2.png',
				'/images/database.png',
				'/images/dots-bg.svg',
				'/images/edu-bg.png',
				'/images/fingerprint.png',
				'/images/graduation.svg',
				'/images/home-circle1.svg',
				'/images/java.png',
				'/images/kotlin.png',
				'/images/motivation.svg',
				'/images/nativescript.png',
				'/images/profile.png',
				'/images/profile-bg.png',
				'/images/qualification-mockup.svg',
				'/images/sidemenu-bg.jpg',
				'/images/ui1.png',
				'/images/ui2.png',
				'/images/ui3.png',
				'/images/ui4.png',
				'/images/ui5.png',
				'/images/ui6.png',
				'/images/ui7.png',
				'/images/ui8.png',
				'/images/ui9.png',
				'/images/vuejs.png',
				'/images/xml.png',
				'/images/fashion/fashion1.webp',
				'/images/fashion/fashion2.webp',
				'/images/fashion/fashion3.webp',
				'/images/fashion/fashion4.webp',
				'/images/fashion/fashion5.webp',
				'/images/fashion/fashion6.webp',
				'/images/fashion/fashion7.webp',
				'/images/fashion/fashion8.webp',
				'/images/fashion/fashion9.webp',
				'/images/fashion/fashion10.webp',
				'/images/fashion/fashion11.webp',
				'/images/fashion/fashion12.webp',
				'/favicon.ico',
				'/logo192.png',
				'/logo512.png'
			])
		})
	)
})

/*this.addEventListener("fetch",(event)=>{
	if(!navigator.onLine){
		event.respondWith(
			caches.match(event.request).then((response)=>{
				if(response){
					return response
				}
			})
		)
	}	
})*/

this.addEventListener("fetch", function(event) { 
	if(!navigator.onLine){
 		event.respondWith((async () => {
	  		const cachedResponse = await caches.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}
	  		const response = await fetch(event.request);
			if (!response || response.status !== 200 || response.type !== 'basic') {
				return response;
			}
			if (ENABLE_DYNAMIC_CACHING) {
				const responseToCache = response.clone();
				const cache = await caches.open(DYNAMIC_CACHE)
				await cache.put(event.request, response.clone());
			}
	  		return response;
		})());
	}
})
