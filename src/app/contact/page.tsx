import ContactForm from '@/components/contact/ContactForm'
import ContactCards from '@/components/contact/contactCards'
import PageHeader, { PageHeader2 } from '@/components/layouts/PageHeader'
import React from 'react'

const ContactPage = () => {


    return (
        <div>
            <PageHeader2 title='GET IN TOUCH' highlight='Us' titleHighlight='Contact' />
            <div className='relative pb-20 px-10'>
                <div className='w-full relative'>
                    <ContactCards />
                </div>

            </div>
            <div className='px-10'>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage