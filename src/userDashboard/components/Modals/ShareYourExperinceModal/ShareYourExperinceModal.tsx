import React, { useState } from 'react'
import { ModalWrapper } from '../../../../admin/components/Modals/ModalWrapper'
import { FilledButtonStyle } from '../../../../styles/Common.style'
import ShareYourExperinceModalStyle from './ShareYourExperinceModal.style'
import { Form, Formik } from 'formik'
import { InputBox, MessageModal } from '../../../../components'
import { StarIcon } from '../../../../assets'

type ShareYourExperinceModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (data: boolean) => void
}
const ShareYourExperinceModal = (props: ShareYourExperinceModalProps) => {
  const [isMessageModalVisible, setMessageModalVisible] = useState(false)
  const { isModalVisible, setIsModalVisible } = props
  return (
    <>
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isFooter={true}
        heading="Share Your Experience"
        width="892px"
        button={
          <FilledButtonStyle
            buttonType="dark"
            width="290px"
            height="60px"
            onClick={() => {
              setMessageModalVisible(true)
              
            }}
          >
            Post Reviews
          </FilledButtonStyle>
        }
      >
        <ShareYourExperinceModalStyle>
          <div className="first-row-wrapper">
            <img
              src="/images/crystal.png"
              alt="crystal"
              width="335px"
              height="220px"
            />
            <div className="description-wrapper">
              <div className="concert-name">
                <h3>Franklin Kub's Concert</h3>
                <p>Alternative, Classical</p>
              </div>

              <div className="description">
                <p>
                  Earum Dolorem Eius Et Corrupti Fugit Expedita. Facilis
                  Expedita Voluptatibus. Possimus Repudiandae Delectus.
                  Excepturi Ipsum Iure Saepe Ipsa Voluptatibus Corrupti.
                </p>
              </div>

              <div className="date-time">
                <p>Friday, August 27 </p>
                <p>7:00 PM - 7:45 Pm</p>
              </div>

              <div>
                <p>E11EVEN Miami Nightclub</p>
                <p>
                  {' '}
                  <img src="/images/icons/location-icon.svg" alt="location" />
                  1020 NW 183rd St, Miami, Florida(FL), 33169
                </p>
              </div>

              <div className="organizedBy-text">
                <p>
                  Organized by: <span className="link">SunriseEvents</span>
                </p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            validationSchema=""
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {() => (
              <Form className="form-wrapper">
                <InputBox
                  name="eventReview"
                  label="Event Review"
                  placeholder="Type here..."
                />
                <Stars />
                <InputBox
                  name="organizerRreview"
                  label="Venue Review"
                  placeholder="Type here..."
                />
                <Stars />
                <InputBox
                  name="eventReview"
                  label="Organizer Review"
                  placeholder="Type here..."
                />
                <Stars />
              </Form>
            )}
          </Formik>
        </ShareYourExperinceModalStyle>
      </ModalWrapper>
      <MessageModal
        isModalVisible={isMessageModalVisible}
        setIsModalVisible={setMessageModalVisible}
        heading="Success"
        message="Your reviews are posted successfully."
      />
    </>
  )
}
export default ShareYourExperinceModal

const Stars = () => {
  return (
    <div className="stars">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  )
}
