import React from "react";
import { useState } from 'react';

export default function Form() {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: ''
	})

	const [showData, setShowData] = useState(false);

	const showFormData = () => {
    setShowData(true);
  };

  return (
	<div className='board'>
		<div className='form__value'>
		<label>
			<p><input
			type='text'
			placeholder='Enter your name'
			onChange={e => {
				setForm({
					...form,
					firstName: e.target.value
				})
			}}></input></p>
		</label>
	</div>
		<div className='form__value'>
		<label>
			<p><input type='text' placeholder='Enter your last name'
			onChange={e => {
				setForm({
					...form,
					lastName: e.target.value
				})
			}}></input></p>
		</label>
	</div>
	<div className='form__value'>
		<label>
			<p><input type='tel' placeholder='Enter your phone number'
			onChange={e => {
				setForm({
					...form,
					phoneNumber: e.target.value
				})
			}}></input></p>
		</label>
	</div>
		<div className='form__value'>
		<label>
			<p><input type='email' placeholder='Enter your email'
			onChange={e => {
				setForm({
					...form,
					email: e.target.value
				})
			}}></input></p>
		</label>
	</div>
		<div className='show'>
		<button className='button' onClick={showFormData}>Отобразить данные</button>
		{showData && (
        <div className="form">
          <span>First name: {form.firstName}</span>
          <span>Last name: {form.lastName}</span>
          <span>Phone number: {form.phoneNumber}</span>
          <span>Email: {form.email}</span>
        </div>
      )}
	</div>
	</div>
  )
}

