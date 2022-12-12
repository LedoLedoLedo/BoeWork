import React from 'react'

function Landing() {
  return (
    <div>
    <!-- Main Section Gallery -->
<div className="row">
<div className="basiclist list-group">

<!-- Basic List Gallery -->
<ul className="galleryUL"  id="gallery1">

  <li className="listentry">
  <a className="basiclistitema list-group-item list-group-item-action" href="#Item1">
    <img className= "companylogo" src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ironhack/original.jpg?1568082165" alt="Logo" />
    <div className="basiclistitemtextcontainer">
      <strong className="basiclistitemOrganization">IronHack</strong>
      <br/>
      <em className="basiclistitemCategory">Vocational School</em>
      <br/>
      <em className="basiclistitemTrade">Web Development</em>
      <br/>
      <em className="basiclistitemCity">Miami, FL</em></em>
    </div>
  </a>
</li>

  <li className="listentry">
    <a className="basiclistitemb list-group-item list-group-item-action" href="#Item2">
      <img className= "companylogo" src="https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/370869_1584277994.jpg?0" alt="Logo" />
      <div className="basiclistitemtextcontainer">
        <strong className="basiclistitemOrganization">Cambr/idge College</strong>
        <br/>
        <em className="basiclistitemCategory">Vocational School</em>
        <br/>
        <em className="basiclistitemTrade">Patient Care Technician</em>
        <br/>
        <em className="basiclistitemCity">Miami, FL</em></em>
      </div>
    </a>
  </li>

  <li className="listentry">
    <a className="basiclistitema list-group-item list-group-item-action" href="#Item3">
      <img className= "companylogo" src="/Images/CompanyLogos/Cambr/idge.png" alt="Logo" />
      <div className="basiclistitemtextcontainer">
        <strong className="basiclistitemOrganization">519 Plumbers</strong>
        <br/>
        <em className="basiclistitemCategory">Vocational School</em>
        <br/>
        <em className="basiclistitemTrade">Plumbing</em>
        <br/>
        <em className="basiclistitemCity">Miami, FL</em></em>
      </div>
    </a>
  </li>


  <li className="listentry">
    <a className="basiclistitemb list-group-item list-group-item-action" href="#Item4">
      <img className= "companylogo" src="/Images/CompanyLogos/Paul Mitchell.png " alt="Logo" />
      <div className="basiclistitemtextcontainer">
        <strong className="basiclistitemOrganization">Paul Mitchell</strong>
        <br/>
        <em className="basiclistitemCategory">Vocational School</em>
        <br/>
        <em className="basiclistitemTrade">Cosmetology</em>
        <br/>
        <em className="basiclistitemCity">Miami, FL</em>
      </div>
    </a>
  </li>


  <li>
      <a className="basiclistitema list-group-item list-group-item-action" href="#Item5">
        <img className= "companylogo" src="Images/CompanyLogos/Paul Mitchell.png" alt="Logo" />
        <div className="basiclistitemtextcontainer">
          <strong className="basiclistitemOrganization">Paul Mitchell</strong>
          <br/>
          <em className="basiclistitemCategory">Vocational School</em>
          <br/>
          <em className="basiclistitemTrade">Cosmetology</em>
          <br/>
          <em className="basiclistitemCity">Fort Lauderdale, FL</em>
        </div>
      </a>
  </li>

<li className="listentry">
  <a className="basiclistitemb list-group-item list-group-item-action" href="#Item6">
    <img className= "companylogo" src="https://media-exp1.licdn.com/dms/image/C5622AQGYGrQfXJjF3Q/feedshare-shrink_2048_1536/0/1647005695721?e=2147483647&v=beta&t=ZucNvOsnuq0pxem4bGOkMjWRGv4GabdVeuVzf9NkeY0" alt="Logo" />
    <div className="basiclistitemtextcontainer">
      <strong className="basiclistitemOrganization">519 Plumbers</strong>
      <br/>
      <em className="basiclistitemCategory">Vocational School</em>
      <br/>
      <em className="basiclistitemTrade">Data Analytics</em>
      <br/>
      <em className="basiclistitemCity">Miami, FL</em></em>
    </div>
  </a>
</li>

</ul>
</div>


<!-- In Depth Gallery  -->

  <div className="indepthlist list-group">
  <ul className="galleryUL" id="gallery2">

    <li id= "Item1" className="indepthlistitema list-group-item list-group-item-action" href="#list-item-1">
        <div className="indepthlistitemcontainer">
          <img className= "companylogo" src="/Images/CompanyLogos/IronHack.png" alt="Logo" />
          <div className="indepthlistitemtextcontainer">
            <a className="indepthlistitemOrganization" href="https://www.ironhack.com/en/miami" target="_blank"> <strong>IronHack</strong></a>
            <br/>
            <em className="indepthlistitemCategory">Vocational School</em>
            <br/>
            <em className="indepthlistitemTrade">Web Development</em>
            <br/>
            <em className="indepthlistitemCity">Miami, FL</em>
          </div>
        </div>
        <br/>
        <br/>
        <hr>
        <strong className="descriptionlabel"> Description</strong> <p className="description"> Learn Web Development, UX UI Design and Data Analytics, and let us guide you through our extensive hiring network in the US and the rest of the world! </p>
          <hr>
        <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Web Development, Data Analytics, UX UI Design</p>
        <hr>
        <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">
        Name
        <br/>
        Number
        <br/>
        Email
        </p>
        <hr>
        <form action="/index.html2" className="applicationbutton" method="post">
          <input className="organizationtextbox" type="text" name="organization" value="IronHack"/>
          <input className="orgApplicationURL" type="text" name="orgApplicationURL" value="https://www.ironhack.com/en/courses/apply"/>
          <br/>
          <button name="apply" type="submit" className="applybtn btn btn-primary">
          Apply Now           <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <br/>
          <br/>
          <br/>
        </form>
    </li>

    <li id= "Item2" className="indepthlistitemb list-group-item list-group-item-action" href="#list-item-2">
    <div className="indepthlistitemcontainer">
      <img className= "companylogo" src="/Images/CompanyLogos/Cambr/idge.png" alt="Logo" />
      <div className="indepthlistitemtextcontainer">
        <a className="indepthlistitemOrganization" href="https://www.cambr/idgehealth.edu/" target="_blank"> <strong>Cambr/idge College</strong></a>
        <br/>
        <em className="indepthlistitemCategory">Vocational School</em>
        <br/>
        <em className="indepthlistitemTrade">Patient Care Technician</em>
        <br/>
        <em className="indepthlistitemCity">Miami, FL</em>
      </div>
    </div>
    <br/>
    <br/>
    <hr>
    <strong className="descriptionlabel"> Description</strong> <p className="description"> The Miami-area campus of Cambr/idge College
    of Healthcare and Technology is located centrally for easy access in Miami on Park Centre Boulevard. Each of our campuses
    houses classNamerooms, technology labs and offices, the perfect atmosphere to jumpstart your career. Whether you’re looking for
    a degree program or a diploma, we have a program to fit your needs</p>
      <hr>
    <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Medical Assistant, Computer Networking,
    Cyber and Network Security, Data Analytics, Health Information Management, Nursing</p>
    <hr>
    <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">Name
    <br/>
    Phone Number
    <br/>
    Email</p>
    <hr>
    <strong className="applicationheader">Apply Now</strong>
    <form action="/" className="applicationform" method="post" enctype="multipart/form-data">
      <input className="organizationtextbox" type="text" name="organization" value="Cambr/idge"/>
      <br/>
      <br/>
      <em className="applicationlabel">First Name: </em> <input className="nameinput" type="text" name="firstname" value=""  required/>
/
/>
      <br/>
      <br/>
      <em className="applicationlabel">Last Name: </em> <input className="nameinput" type="text" name="lastname" value="" required/>
/
/>
      <br/>
      <br/>
      <em className="applicationlabel">Email: </em> <input className="emailinput" type="text" name="email" value="" required/>
/
/>
      <br/>
      <br/>
      <em className="applicationlabel">Trade of Interest: </em> <input type="text" name="appliedForTrade" value="" required/>
/
/>
      <br/>
      <br/>
      <div className="custom-file mb-3">
        <label for="resume" className="applicationlabel custom-file-label"><em>Resume (upload as image):</em></label>
        <input type="file" name="resume" className="custom-file-input" id="myFile" accept="image/*" required/>
/
/>
      </div>
      <br/>
      <br/>
      <textarea className="additionalcomments" placeholder="Additional Comments/Messages" name="additionalcomments" rows="6" cols="50"></textarea>
      <br/>
      <br/>
      <button  name="apply" type="submit" className="applybtn btn btn-primary">Submit Application</button>
      <br/>
      <br/>
      <br/>
    </form>
    </li>

    <li id= "Item3" className="indepthlistitema list-group-item list-group-item-action" href="#list-item-3">
    <div className="indepthlistitemcontainer">
      <img className= "companylogo" src="/Images/CompanyLogos/Cambr/idge.png" alt="Logo" />
      <div className="indepthlistitemtextcontainer">
        <a className="indepthlistitemOrganization" href="https://www.cambr/idgehealth.edu/" target="_blank"> <strong>Cambr/idge College</strong></a>
        <br/>
        <em className="indepthlistitemCategory">Vocational School</em>
        <br/>
        <em className="indepthlistitemTrade">Nursing Assistant</em>
        <br/>
        <em className="indepthlistitemCity">Miami, FL</em>
      </div>
    </div>
    <br/>
    <br/>
    <hr>
    <strong className="descriptionlabel"> Description</strong> <p className="description"> The Miami-area campus of Cambr/idge College
    of Healthcare and Technology is located centrally for easy access in Miami on Park Centre Boulevard. Each of our campuses
    houses classNamerooms, technology labs and offices, the perfect atmosphere to jumpstart your career. Whether you’re looking for
    a degree program or a diploma, we have a program to fit your needs.</p>
      <hr>
    <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Medical Assistant, Computer Networking,
    Cyber and Network Security, Data Analytics, Health Information Management, Nursing</p>
    <hr>
    <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">Name
    <br/>
    Phone Number
    <br/>
    Email</p>
    <hr>
    <form action="/index.html2" className="applicationbutton" method="post">
    <input className="organizationtextbox" type="text" name="organization" value="Cambr/idge"/>
    <input className="orgApplicationURL" type="text" name="orgApplicationURL" value="https://www.cambr/idgehealth.edu/apply/"/>
    <br/>
    <button name="apply" type="submit" className="applybtn btn btn-primary">
    Apply Now           <i className="fa-solid fa-square-arrow-up-right"></i>
  </button>
    <br/>
    <br/>
    <br/>
  </form>
  </li>


    <li id= "Item4" className="indepthlistitemb list-group-item list-group-item-action" href="#list-item-4">
        <div className="indepthlistitemcontainer">
          <img className= "companylogo" src="/Images/CompanyLogos/Paul Mitchell.png" alt="Logo" />
          <div className="indepthlistitemtextcontainer">
            <a className="indepthlistitemOrganization" href="https://paulmitchell.edu/miami" target="_blank"> <strong>Paul Mitchell School</strong></a>
            <br/>
            <em className="indepthlistitemCategory">Vocational School</em>
            <br/>
            <em className="indepthlistitemTrade">Cosmetology</em>
            <br/>
            <em className="indepthlistitemCity">Miami, FL</em>
          </div>
        </div>
        <br/>
        <br/>
        <hr>
        <strong className="descriptionlabel"> Description</strong> <p className="description"> Whether you dream of becoming a cosmetologist, barber,
          esthetician or other beauty professional, we know choosing a school is a big decision, but it should also be a fun one!
          Students tell us all the time that the moment they walked through our doors in Miami, something just felt different.
          We pride ourselves on our welcoming culture, inclusive environment and our commitment to br/inging out the best in all of our students.
          We know that you’ll succeed when you feel supported, so our Learning Leaders do everything they can to help you prepare to pass the
          state board examination and launch your beauty industry career. </p>
          <hr>
        <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Cosmetology Programs</p>
        <hr>
        <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">
        Name
        <br/>
        Number
        <br/>
        Email</p>
        <hr>
        <strong className="applicationheader">Apply Now</strong>
        <form action="/" className="applicationform" method="post" enctype="multipart/form-data">
          <input className="organizationtextbox" type="text" name="organization" value="PaulMitchell"/>
          <br/>
          <br/>
          <em className="applicationlabel">First Name: </em> <input className="nameinput" type="text" name="firstname" value="" required/>
/
>
          <br/>
          <br/>
          <em className="applicationlabel">Last Name: </em> <input className="nameinput" type="text" name="lastname" value="" required/>
/
>
          <br/>
          <br/>
          <em className="applicationlabel">Email: </em> <input className="emailinput" type="text" name="email" value="" required/>
/
>
          <br/>
          <br/>
          <em className="applicationlabel">Trade of Interest: </em> <input type="text" name="appliedForTrade" value="" required/>
/
>
          <br/>
          <br/>
          <div className="custom-file mb-3">
            <label for="resume" className="applicationlabel custom-file-label"><em>Resume (upload as image):</em></label>
            <input type="file" name="resume" className="custom-file-input" id="file" accept="image/*" required/>
/
>
          </div>
          <br/>
          <br/>
          <textarea className="additionalcomments" placeholder="Additional Comments/Messages" name="additionalcomments" rows="6" cols="50"></textarea>
          <br/>
          <br/>
          <button  name="apply" type="submit" className="applybtn btn btn-primary">Submit Application</button>
          <br/>
          <br/>
          <br/>
        </form>
    </li>


    <li id= "Item5" className="indepthlistitema list-group-item list-group-item-action" href="#list-item-5">
        <div className="indepthlistitemcontainer">
          <img className= "companylogo" src="/Images/CompanyLogos/Paul Mitchell.png" alt="Logo" />
          <div className="indepthlistitemtextcontainer">
            <a className="indepthlistitemOrganization" href="https://paulmitchell.edu/fortlauderdale" target="_blank"> <strong>Paul Mitchell School</strong></a>
            <br/>
            <em className="indepthlistitemCategory">Vocational School</em>
            <br/>
            <em className="indepthlistitemTrade">Barbering</em>
            <br/>
            <em className="indepthlistitemCity">Fort Lauderdale, FL</em>
          </div>
        </div>
        <br/>
        <br/>
        <hr/>
        <strong className="descriptionlabel"> Description</strong> <p className="description"> Whether you dream of becoming a cosmetologist, barber,
          esthetician or other beauty professional, we know choosing a school is a big decision, but it should also be a fun one!
          Students tell us all the time that the moment they walked through our doors in Miami, something just felt different.
          We pride ourselves on our welcoming culture, inclusive environment and our commitment to br/inging out the best in all of our students.
          We know that you’ll succeed when you feel supported, so our Learning Leaders do everything they can to help you prepare to pass the
          state board examination and launch your beauty industry career. </p>
          <hr/>
        <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Cosmetology, Barbering</p>
        <hr/>
        <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">
        Name
        <br/>
        Number
        <br/>
        Email
        </p>
        <hr/>
        <form action="/index.html2" className="applicationbutton" method="post">
          <input className="organizationtextbox" type="text" name="organization" value="Paul Mitchell School"/>
          <input className="orgApplicationURL" type="text" name="orgApplicationURL" value="https://paulmitchell.edu/fortlauderdale/get-started"/>
          <br/>
          <button name="apply" type="submit" className="applybtn btn btn-primary">
          Apply Now           <i className="fa-solid fa-square-arrow-up-right"></i>
        </button>
          <br/>
          <br/>
          <br/>
        </form>
    </li>

    <li id= "Item6" className="indepthlistitemb list-group-item list-group-item-action" href="#list-item-6">
        <div className="indepthlistitemcontainer">
          <img className= "companylogo" src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ironhack/original.jpg?1568082165" alt="Logo" />
          <div className="indepthlistitemtextcontainer">
            <a className="indepthlistitemOrganization" href="https://www.ironhack.com/en/miami" target="_blank"> <strong>IronHack</strong></a>
            <br/>
            <em className="indepthlistitemCategory">Vocational School</em>
            <br/>
            <em className="indepthlistitemTrade">Data Analytics</em>
            <br/>
            <em className="indepthlistitemCity">Miami, FL</em>
          </div>
        </div>
        <br/>
        <br/>
        <hr>
        <strong className="descriptionlabel"> Description</strong> <p className="description">Learn Web Development, UX UI Design and Data Analytics, and let us guide you through our extensive hiring network in the US and the rest of the world!</p>
          <hr>
        <strong className="tradesofferedlabel">Programs</strong><p className="tradesoffered">Web Development, Data Analytics, UX UI Design</p>
        <hr>
        <strong className="pointofcontactlabel">Point of Contact</strong><p className="pointofcontact">
        Name
        <br/>
        Number
        <br/>
        Email
        </p>
        <hr>
        <strong className="applicationheader">Apply Now</strong>
           <form action="/" className="applicationform" method="post" enctype="multipart/form-data">
             <input className="organizationtextbox" type="text" name="organization" value="IronHack">
             <br/>
             <br/>
             <em className="applicationlabel">First Name: </em> <input className="nameinput" type="text" name="firstname" value="" required/>
/
>
             <br/>
             <br/>
             <em className="applicationlabel">Last Name: </em> <input className="nameinput" type="text" name="lastname" value="" required/>
/
>
             <br/>
             <br/>
             <em className="applicationlabel">Email: </em> <input className="emailinput" type="text" name="email" value="" required/>
/
>
             <br/>
             <br/>
             <em className="applicationlabel">Trade of Interest: </em> <input type="text" name="appliedForTrade" value="" required/>
/
>
             <br/>
             <br/>
             <div className="custom-file mb-3">
               <label for="resume" className="applicationlabel custom-file-label"><em>Resume (upload as image):</em></label>
               <input type="file" name="resume" className="custom-file-input" id="file" accept="image/*" required/>
/
>
             </div>
             <br/>
             <br/>
             <textarea className="additionalcomments" placeholder="Additional Comments/Messages" name="additionalcomments" rows="6" cols="50"></textarea>
             <br/>
             <br/>
             <button  name="apply" type="submit" className="applybtn btn btn-primary">Submit Application</button>
             <br/>
             <br/>
             <br/>
           </form>
        </li>

  </ul>
  </div>
</div>
  )
}

export default Landing