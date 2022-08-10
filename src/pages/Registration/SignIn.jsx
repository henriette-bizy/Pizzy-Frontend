function SignIn(){


    return(

   <div>
    <Form >
      
      <div className="row"> 
        <label htmlFor="">UserName</label>
        <input type="text" placeholder="input ur username" />
      </div>
      <div className="row">
<label htmlFor="">Password</label>
<input type="password" placeholder="Input ur password"/>
      </div>

        </Form>
   </div>

    )
}

export default SignIn