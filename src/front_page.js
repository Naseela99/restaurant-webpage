import pic from './home.jpg'

export default function load_page(){

    const body = document.querySelector('body')

    


  
    const content_div = document.createElement('div')
    content_div.setAttribute('id','content')

    const header_div = document.createElement('div')
    header_div.className = 'header'

    const header_left = document.createElement('div')
    header_left.className = 'header-left'

    const header_right = document.createElement('div')
    header_right.className = 'header-right'


    const rest_name = document.createElement('a')
    rest_name.className = 'home'
    rest_name.textContent = 'BarbieEats'
    
    header_left.appendChild(rest_name)

    header_div.appendChild(header_left)

    const right_link1 = document.createElement('a')
    right_link1.textContent = 'Menu'
    right_link1.className = 'menu'

    header_right.appendChild(right_link1)

    const right_link2 = document.createElement('a')
    right_link2.textContent = 'Contact'
    right_link2.className = 'contact'

    header_right.appendChild(right_link2)


    header_div.appendChild(header_right)

    content_div.appendChild(header_div)

    const intro_div = document.createElement('div')
   intro_div.className = 'intro'

   const text_div = document.createElement('div')
   text_div.className = 'text'
   

   const heading_div = document.createElement('div')
   heading_div.className = 'heading'


   const heading_welcome_div = document.createElement('div')
   heading_welcome_div.className = 'heading-welcome'
   heading_welcome_div.textContent = 'BarbieEats'


   const heading_txt_div = document.createElement('div')
   heading_txt_div.className = 'heading-txt'
   heading_txt_div.textContent = 'Enjoy our barbelicious food!'

   heading_div.appendChild(heading_welcome_div) 
   heading_div.appendChild(heading_txt_div) 

   
   text_div.appendChild(heading_div)

   const txt_content_div = document.createElement('div')
   txt_content_div.textContent = "BarbieWorld is a place for turning all your blues into the frosty pink! Ranging from burgers to fries to pastries, everything is served pink. Our staff welcomes you to their pink world! Don't forget to try the new barbie fries!"

   txt_content_div.className = 'txt-content'


   text_div.appendChild(txt_content_div)

   intro_div.appendChild(text_div)


   const picture_div = document.createElement('div')
   picture_div.className = 'picture'

   const p = new Image()
   p.src = pic
   p.className = 'front-page-img'
   picture_div.appendChild(p)

   intro_div.appendChild(picture_div)

   content_div.appendChild(intro_div)


   const reach = document.createElement('div')
   reach.className = 'reach'

   const serve = document.createElement('div')
   serve.className = 'serve'
   serve.textContent = 'Best service in town!'

   const clean = document.createElement('div')
   clean.className = 'clean'
   clean.textContent = 'No compromise on hygeine!'

   const taste = document.createElement('div')
   taste.className = 'taste'
   taste.textContent = 'Taste that takes you to barbieland!'

    
   reach.appendChild(serve)
   reach.appendChild(clean)
   reach.appendChild(taste)

   content_div.append(reach)



   const footer = document.createElement('div')
   footer.className = 'footer'

   const location = document.createElement('div')
   location.textContent = '2611 26th St BarbieLand'
   location.className = 'footer-loc'
   footer.appendChild(location)



   const s_links = document.createElement('div')
   s_links.className = 'footer-links'

   const insta = document.createElement('div')
   const insta_link = document.createElement('a')
   insta_link.textContent = 'Instagram'
   insta.appendChild(insta_link)

   const fb = document.createElement('div')
   const fb_link = document.createElement('a')
   fb_link.textContent = 'Facebook'
   fb.appendChild(fb_link)


   const linkedin = document.createElement('div')
   const linkedIn_link = document.createElement('a')
   linkedIn_link.textContent = 'LinkedIn'
   linkedin.appendChild(linkedIn_link)


   const threads = document.createElement('div')
   const threads_link = document.createElement('a')
   threads_link.textContent = 'Threads'
   threads.appendChild(threads_link)


   s_links.appendChild(insta)
   s_links.appendChild(fb)
   s_links.appendChild(linkedin)
   s_links.appendChild(threads)






   footer.appendChild(location)


   footer.appendChild(s_links)


   const links = document.createElement('div')
   links.className = 'footer-links'

   const aboutus = document.createElement('div')
   const aboutus_link = document.createElement('a')
   aboutus_link.textContent = 'About Us'
   aboutus.appendChild(aboutus_link)

   const chef = document.createElement('div')
   const chef_link = document.createElement('a')
   chef_link.textContent = 'Our Chefs'
   chef.appendChild(chef_link)


   const careers = document.createElement('div')
   const careers_link = document.createElement('a')
   careers_link.textContent = 'Careers'
   careers.appendChild(careers_link)




   links.appendChild(aboutus)
   links.appendChild(chef)
   links.appendChild(careers)



   footer.appendChild(links)




   content_div.append(footer)


   

//    body.appendChild(content_div)
   
   return content_div
   
}

 

