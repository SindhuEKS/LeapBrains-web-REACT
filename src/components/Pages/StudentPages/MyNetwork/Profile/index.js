import React, { Component } from "react";
import Layouts from "../../../../Layout/Sidebar"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Rating from "../../../../CommonComponents/Rating";
import Avatar1 from "../../../../../assets/images/icons/Avatar1.png"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: [
                {
                    'title': "About",
                    'bachelor': 'Stanford University, CA',
                    'major': 'Massachusetts Institute of Technology, Cambridge, MA',
                    'links': ['Facebook', 'Twitter', 'Instagram'],
                    'tags': ['Artificial intelegent', 'Data structures', 'Deep learning', 'Data science', 'Machine learning']

                }
            ],
            packageData: [
                {
                    'id': 1,
                    'title': 'Basic Package',
                    'bachelor': 'One time service',
                    'price': '15$',
                    'month': '3',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '10 people subscripted currently',
                    'text1': '50 people subscripted last year',
                    'button': 'Purchase'
                },
                {
                    'id': 2,
                    'title': 'Standart Package',
                    'bachelor': 'One time service',
                    'price': '35$',
                    'month': '5',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '23 people subscripted',
                    'button': 'Purchase'
                },
                {
                    'id': 3,
                    'title': 'Premium Package',
                    'bachelor': 'One time service',
                    'price': '55$',
                    'month': '6',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '34 people subscripted',
                    'button': 'Purchase'
                }
            ],
            hoursData: [
                {
                    'title': 'Working hours',
                    'monday': ['8 am - 9 am', '10 am - 11 am', '11 am - 12 am', '1 pm - 2 pm', '4 pm - 5 pm'],
                    'tuesday': ['8 am - 9 am', '10 am - 11 am', '11 am - 12 am'],
                    'wednesday': ['8 am - 9 am', '10 am - 11 am'],
                    'thursday': ['11 am - 12 am', '1 pm - 2 pm', '4 pm - 5 pm'],
                    'friday': ['8 am - 9 am', '10 am - 11 am'],
                    'saturday': ['8 am - 9 am'],
                    'sunday': ['8 am - 9 am'],
                }
            ],
            reviewData: [
                {
                    'title': 'Working hours',
                    'stars5': '80',
                    'stars': '30',
                    'stars': '10',
                    'stars': '0',
                    'stars': '0',
                }
            ],
            studentsSaysData: [
                {
                    'id': 1,

                    'icon': Avatar1,
                    'name': 'Daniel',
                    'rating': '5',
                    'date': 'October 23, 2021',
                    'course': 'General',
                    'text': 'I love that Nikolay thoroughly prepares for each class and gives me the material accordingly to my goals. Unlike the many other teachers, Nikolay is interested in my progress.'

                },
                {
                    'id': 2,

                    'icon': Avatar1,
                    'name': 'Viktor',
                    'rating': '5',
                    'date': 'September 30, 2021',
                    'course': 'General',
                    'text': 'Nikolay is a greate mentor. He established a learning plan according to the mentee’s need and provide guidance and useful tips. I highly recommend him if you want to improve in field'

                }
            ]
        }
    }

    render() {


        let ProfileDetails = this.state.profileData.map((element, key) => {

            return (
                <>
                    <div className="profile">
                        {/* single card  */}
<div className="col-sm-1 col-sm-1">
</div>
                        <div className="col-sm-10 col-md-10 pb-3">
                            <div className="card__item">
                                <div className="card__item__lists__card-height">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h3 className="card__item__lists__titel">
                                                {element.title}
                                            </h3>
                                            <hr />
                                        </div>
                                        <div className="col-sm-6">
                                            <h3 className="card__item__lists__titel" style={{ visibility: "hidden" }}>
                                                {"."}
                                            </h3>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-6">
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-2"><h3 className="card__item__lists__profile-sub">
                                                        Bachelor
                                                    </h3></div>:
                                                    <div className="col-9"><h3 className="card__item__lists__profile-sub"><span className="sub-heading"> {element.bachelor}</span></h3> </div>
                                                </div>

                                            </div>

                                            <hr />
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-2"><h3 className="card__item__lists__profile-sub">
                                                        Major
                                                    </h3></div>:
                                                    <div className="col-9"><h3 className="card__item__lists__profile-sub"><span className="sub-heading"> {element.major}</span></h3> </div>
                                                </div>

                                            </div>

                                            <hr />
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-2"><h3 className="card__item__lists__profile-sub">
                                                        Links
                                                    </h3></div>:
                                                    <div className="col-9"><h3 className="card__item__lists__profile-sub"> {element.links.map((links) =>
                                                        <span className="sub-heading" key={links.toString() + key}>
                                                            {links}
                                                        </span>)}</h3> </div>
                                                </div>

                                            </div>


                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="subtitle">
                                                <h3 className="card__item__lists__profile-sub">
                                                    Core skills :
                                                </h3>
                                                <div className="card__item__lists__tags">
                                                    {element.tags.map((tags) =>
                                                        <span key={tags.toString() + key}>
                                                            {tags}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </>
            );
        });
        {/* package  */ }
        let PackageDetails = this.state.packageData.map((element, key) => {
            return (
                <>
                    <div className="col-md-3 col-sm-3 pb-3">
                        <div className="card__item">
                            <div className="card__item__lists ">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="card__item__lists__titel">
                                            {element.title}
                                        </h3>
                                        <hr />

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="subtitle">
                                            <div className="row">
                                                <div className="col-6"><h3 className="card__item__lists__profile-sub">
                                                    Bachelor
                                                </h3></div>:
                                                <div className="col-5"><h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">{element.bachelor}</span>
                                                </h3>
                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="subtitle">
                                            <div className="row">
                                                <div className="col-6"><h3 className="card__item__lists__profile-sub">
                                                    Price
                                                </h3></div>:
                                                <div className="col-5"><h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">{element.price}</span>
                                                </h3>
                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="subtitle">
                                            <div className="row">
                                                <div className="col-6"><h3 className="card__item__lists__profile-sub">
                                                    Paid session per month
                                                </h3></div>:
                                                <div className="col-5"><h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">{element.month}</span>
                                                </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="subtitle">
                                            <div className="row">
                                                <div className="col-6"><h3 className="card__item__lists__profile-sub">
                                                    Type of service
                                                </h3></div>:
                                                <div className="col-5"><h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">{element.service}</span>
                                                </h3>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div className="profile-footer">
                                    <p className="GetAdvisors__sub-title pargh">
                                        {element.text} </p>
                                    <p className="GetAdvisors__sub-title pargh">
                                        {element.text1}
                                    </p>

                                    <div className="footer__cta">
                                        {element.button}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        });
        {/* working hours  */ }
        let hoursDetails = this.state.hoursData.map((element, key) => {

            return (
                <>
                    <div className="col-sm-12 pb-3">
                        <div className="card__item">
                            <div className="card__item__lists__card-height">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h3 className="card__item__lists__titel">
                                            {element.title}
                                        </h3>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 ">
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Monday {element.monday.map((monday) =>
                                                    <span className="sub-heading pt-2" key={monday.toString() + key}>
                                                        {monday}
                                                    </span>
                                                )}
                                            </div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>

                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Tuesday {element.tuesday.map((tuesday) =>
                                                    <span className="sub-heading pt-2" key={tuesday.toString() + key}>
                                                        {tuesday}
                                                    </span>
                                                )}</div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Wednesday {element.wednesday.map((wednesday) =>
                                                    <span className="sub-heading pt-2" key={wednesday.toString() + key}>
                                                        {wednesday}
                                                    </span>
                                                )}</div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Thursday {element.thursday.map((thursday) =>
                                                    <span className="sub-heading pt-2" key={thursday.toString() + key}>
                                                        {thursday}
                                                    </span>
                                                )}
                                            </div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Friday  {element.friday.map((friday) =>
                                                    <span className="sub-heading pt-2" key={friday.toString() + key}>
                                                        {friday}
                                                    </span>
                                                )}
                                            </div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Saturday  {element.saturday.map((saturday) =>
                                                    <span className="sub-heading pt-2" key={saturday.toString() + key}>
                                                        {saturday}
                                                    </span>
                                                )}
                                            </div>
                                        </h3>
                                        <div className="col-6">
                                            <hr />
                                        </div>
                                        <h3 className="card__item__lists__profile-sub">
                                            <div className="card__item__lists__tags">
                                                Sunday  {element.sunday.map((sunday) =>
                                                    <span className="sub-heading pt-2" key={sunday.toString() + key}>
                                                        {sunday}
                                                    </span>
                                                )}
                                            </div>
                                        </h3>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>



                </>
            );
        });
        let reviewDetails = this.state.reviewData.map((element, key) => {
            return (
                <>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="card__item__lists__titel">
                                {element.title}
                            </h3>
                            <hr />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-8 col-6">

                            <h3 className="card__item__lists__profile-sub">

                              5 stars
                                    <ProgressBar now={element.stars5} />
                               
                            </h3>
                            <div className="" style={{border: "1px solid red"}}>
                            <h3 className="card__item__lists__profile-sub barline">
                                4 stars 
                            
                            <span className="barline">
                                    <ProgressBar now={element.stars5} />
                                </span>
                                </h3>
                            </div>
                            

                            <h3 className="card__item__lists__profile-sub">
                                3 stars  <span className="barline">
                                    <ProgressBar now={element.stars5} />
                                </span>
                            </h3>
                            <h3 className="card__item__lists__profile-sub">
                                2 stars  <span className="barline">
                                    <ProgressBar now={element.stars5} />
                                </span>
                            </h3>
                            <h3 className="card__item__lists__profile-sub">
                                1 stars  <span className="barline">
                                    <ProgressBar now={element.stars5} />
                                </span>
                            </h3>

                        </div>
                        <div className="col-sm-4 col-6">
                            <h2 class="card__item__lists__titel">4.0</h2>
                            <div className="GetAdvisors__List__items__rating">
                                <Rating
                                    isRating={true}
                                    RatingValue={4}
                                />
                                <p>11 review</p>
                            </div>
                        </div>
                    </div>
                </>

            )
        });
        // student says
        let studentDetails = this.state.studentsSaysData.map((element, key) => {
            return (
                <>

                    <hr />
                    <div className="student">
                        <div className="row m-0">
                            <div className="col-1 p-0 ">
                                <div className="Avatar-icon">
                                    <img src={element.icon} alt={element.AvatarIconAlt} />
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="student">
                                    <h2 className="student__title ">{element.name}
                                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_111_7059)">
                                                <path d="M19.5824 8.0495C19.756 8.58107 19.6139 9.15366 19.2115 9.54381L15.693 12.9552C15.624 13.0222 15.5925 13.1187 15.6087 13.2132L16.4393 18.0302C16.5344 18.581 16.311 19.1273 15.8564 19.4559C15.5995 19.6417 15.2989 19.736 14.9964 19.736C14.7635 19.736 14.5294 19.6801 14.3131 19.567L9.96404 17.2927C9.87858 17.248 9.77663 17.248 9.69121 17.2927L5.34221 19.567C4.8449 19.827 4.25341 19.7846 3.79881 19.4559C3.34421 19.1274 3.12086 18.5812 3.21582 18.0302L4.04642 13.2133C4.06274 13.1187 4.03119 13.0222 3.96213 12.9552L0.443685 9.54381C0.0412544 9.15366 -0.100846 8.58107 0.0728517 8.0495C0.24655 7.51792 0.699805 7.13779 1.25588 7.05745L6.11821 6.3547C6.21369 6.34088 6.29616 6.28126 6.33891 6.19522L8.51343 1.81258C8.76209 1.31136 9.26565 1 9.82758 1C10.3895 1 10.8931 1.31136 11.1417 1.81258L13.3163 6.19518C13.359 6.28126 13.4415 6.34088 13.5369 6.35466L18.3993 7.05745C18.9554 7.13779 19.4087 7.51792 19.5824 8.0495Z" fill="#AEAEAE" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_111_7059">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="sub-heading"> {element.rating} </span>
                                    </h2>
                                    <p className="student__sub-title">{element.date}
                                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#5C5C5C" />
                                        </svg>
                                        {element.course}
                                    </p>
                                </div>
                                <p class="student__List">{element.text}</p>
                            </div>

                        </div>
                    </div>


                </>
            )
        });
        return (
            <>
                <Layouts />
                <div className="Templates bg-temp">
                    <div className="model-content ">
                       
                        {this.state.profileData && this.state.profileData.length > 0 &&
                            <div>
                                {ProfileDetails}
                            </div>

                        }
                        {this.state.packageData && this.state.packageData.length > 0 &&
                            <div className="row">
                                {PackageDetails}
                            </div>

                        }
                        {this.state.hoursData && this.state.hoursData.length > 0 &&
                            <div>
                                {hoursDetails}
                            </div>
                        }
                        <div className="col-sm-12 pb-3">
                            <div className="card__item">
                                <div className="card__item__lists__card-height">
                                    {reviewDetails}
                                    {this.state.studentsSaysData && this.state.studentsSaysData.length > 0 &&
                                        <div>

                                            {studentDetails}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </>


        )
    }
}

export default Index;