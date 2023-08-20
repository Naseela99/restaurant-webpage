export default function load_contact(){

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











    const contact_outer = document.createElement('div')
    contact_outer.className = 'contact-outer'

    const contact_header = document.createElement('div')
    contact_header.className = 'contact-header'
    contact_header.textContent = 'Contact Us'

    contact_outer.appendChild(contact_header)

    const contact_div = document.createElement('div')
    contact_div.classList = 'contact-div'

    var contact_card = document.createElement('div')
    contact_card.className = 'contact-card'
    var contact_info = document.createElement('div')
    contact_info.className = contact_info

    var contact_name = document.createElement('div')
    contact_name.className = 'info-content'
    contact_name.textContent = 'Barbie'

    var contact_designation = document.createElement('div')
    contact_designation.className = 'info-content'
    contact_designation.textContent = 'Owner'

    var contact_email = document.createElement('div')
    contact_email.className = 'info-content'
    contact_email.textContent = 'barbie@barbieworld.com'

    var contact_ph = document.createElement('div')
    contact_ph.className = 'info-content'
    contact_ph.textContent = '+1-000-000-0000'

    contact_info.appendChild(contact_name)
    contact_info.appendChild(contact_designation)
    contact_info.appendChild(contact_email)
    contact_info.appendChild(contact_ph)

    contact_card.appendChild(contact_info)
    contact_div.appendChild(contact_card)


    contact_card = document.createElement('div')
    contact_card.className = 'contact-card'
    contact_info = document.createElement('div')
    contact_info.className = contact_info

    contact_name = document.createElement('div')
    contact_name.className = 'info-content'
    contact_name.textContent = 'Stacie'

    contact_designation = document.createElement('div')
    contact_designation.className = 'info-content'
    contact_designation.textContent = 'Manager'

    contact_email = document.createElement('div')
    contact_email.className = 'info-content'
    contact_email.textContent = 'stacie@barbieworld.com'

    contact_ph = document.createElement('div')
    contact_ph.className = 'info-content'
    contact_ph.textContent = '+1-123-345-4567'

    contact_info.appendChild(contact_name)
    contact_info.appendChild(contact_designation)
    contact_info.appendChild(contact_email)
    contact_info.appendChild(contact_ph)

    contact_card.appendChild(contact_info)
    contact_div.appendChild(contact_card)


    contact_card = document.createElement('div')
    contact_card.className = 'contact-card'
    contact_info = document.createElement('div')
    contact_info.className = contact_info

    contact_name = document.createElement('div')
    contact_name.className = 'info-content'
    contact_name.textContent = 'Ken'

    contact_designation = document.createElement('div')
    contact_designation.className = 'info-content'
    contact_designation.textContent = 'Chef'

    contact_email = document.createElement('div')
    contact_email.className = 'info-content'
    contact_email.textContent = 'ken@barbieworld.com'

    contact_ph = document.createElement('div')
    contact_ph.className = 'info-content'
    contact_ph.textContent = '+1-999-999-9999'

    contact_info.appendChild(contact_name)
    contact_info.appendChild(contact_designation)
    contact_info.appendChild(contact_email)
    contact_info.appendChild(contact_ph)

    contact_card.appendChild(contact_info)
    contact_div.appendChild(contact_card)


    contact_outer.appendChild(contact_div)

    content_div.appendChild(contact_outer)














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