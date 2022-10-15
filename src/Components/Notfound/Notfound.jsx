/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Diamond from './2704133.png'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Notfound(props) {
  return (
    <>
        <div className='text-center mt-5 mb-3'>
            <img src={Diamond} className='w-50' />
        </div>
        {props.userData?<Link to='/home' className='d-flex justify-content-center align-items-center text-decoration-none'><Icon icon="eva:arrow-ios-back-outline" className='d-flex align-items-center'/> Go back to home</Link>:<Link to='/login' className='d-flex justify-content-center align-items-center text-decoration-none'><Icon icon="eva:arrow-ios-back-outline" className='d-flex align-items-center'/> Go back to login</Link>}
        

    </>
  )
}
