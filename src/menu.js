import menu1 from './menu1.jpg'
import menu2 from './menu2.jpg'
import menu3 from './menu3.jpg'
import menu4 from './menu4.jpg'
import menu5 from './menu5.jpg'
import menu6 from './menu6.jpg'


export default function load_menu(){

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







    const menu_header= document.createElement('div');
    menu_header.className = 'menu-header'
    menu_header.textContent = 'Our Menu'

    const menu_outer_div = document.createElement('div');
    menu_outer_div.className = 'menu-outer'



    const menu_div = document.createElement('div');
    menu_div.className = 'menu-div'

    menu_outer_div.appendChild(menu_header)

    menu_outer_div.appendChild(menu_div)

    const menu1_div = document.createElement('div');
    menu1_div.className = 'menu-inner'
    const menu1_pic = new Image()
    menu1_pic.className = 'menu-pic'
    menu1_pic.src = menu1
    const menu1_text = document.createElement('div');
    menu1_text.className = 'menu-text'
    menu1_text.textContent = 'Barb-berry Pastry'

    menu1_div.appendChild(menu1_pic)
    menu1_div.appendChild(menu1_text)


    menu_div.appendChild(menu1_div)

    const menu2_div = document.createElement('div');
    menu2_div.className = 'menu-inner'
    const menu2_pic = new Image()
    menu2_pic.className = 'menu-pic'
    menu2_pic.src = menu2
    const menu2_text = document.createElement('div');
    menu2_text.className = 'menu-text'
    menu2_text.textContent = 'ChicKEN Sandwich'

    menu2_div.appendChild(menu2_pic)
    menu2_div.appendChild(menu2_text)

    menu_div.appendChild(menu2_div)



    const menu3_div = document.createElement('div');
    menu3_div.className = 'menu-inner'
    const menu3_pic = new Image()
    menu3_pic.className = 'menu-pic'
    menu3_pic.src = menu3
    const menu3_text = document.createElement('div');
    menu3_text.className = 'menu-text'
    menu3_text.textContent = 'Dance The Night'

    menu3_div.appendChild(menu3_pic)
    menu3_div.appendChild(menu3_text)

    menu_div.appendChild(menu3_div)



    const menu4_div = document.createElement('div');
    menu4_div.className = 'menu-inner'
    const menu4_pic = new Image()
    menu4_pic.className = 'menu-pic'
    menu4_pic.src = menu4
    const menu4_text = document.createElement('div');
    menu4_text.className = 'menu-text'
    menu4_text.textContent = 'Speed Drive Salad'
    

    menu4_div.appendChild(menu4_pic)
    menu4_div.appendChild(menu4_text)

    menu_div.appendChild(menu4_div)


    const menu5_div = document.createElement('div');
    menu5_div.className = 'menu-inner'
    const menu5_pic = new Image()
    menu5_pic.className = 'menu-pic'
    menu5_pic.src = menu5
    const menu5_text = document.createElement('div');
    menu5_text.className = 'menu-text'
    menu5_text.textContent = 'Ice Spice Popsicle'

    menu5_div.appendChild(menu5_pic)
    menu5_div.appendChild(menu5_text)

    menu_div.appendChild(menu5_div)


    const menu6_div = document.createElement('div');
    menu6_div.className = 'menu-inner'
    const menu6_pic = new Image()
    menu6_pic.className = 'menu-pic'
    menu6_pic.src = menu6
    const menu6_text = document.createElement('div');
    menu6_text.className = 'menu-text'
    menu6_text.textContent = 'Barberrie Parfait'

    menu6_div.appendChild(menu6_pic)
    menu6_div.appendChild(menu6_text)

    menu_div.appendChild(menu6_div)

    content_div.appendChild(menu_outer_div)


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

   return content_div








    // body.appendChild(content_div)

}