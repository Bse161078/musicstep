import { Form, Formik } from 'formik'
import React from 'react'
import { ContentHeader, DashboardHeader } from '..'
import { InputBox, InputCheckbox } from '../../../components'
import LabelWithTag from '../LabelWithTag/LabelWithTag'
import { UploadFile } from '..'
import { OrganizationProfileFormStyle } from './OrganizationProfileForm.style'
import ShowCaseYourEvents from './ShowCaseYourEvent'
import { policies } from '../../../mockData/policies'
import { attributesList } from './OrganizationAttributesList'
type OrganizationProfileFormProps = {
  setCurrentPage: (data: string) => void
}
const OrganizationProfileForm = (props: OrganizationProfileFormProps) => {
  const { setCurrentPage } = props

  const handleProfileForm = () => {}

  return (
    <OrganizationProfileFormStyle>
      <DashboardHeader
        handleBackClick={() => setCurrentPage('preview')}
        handleSaveClick={() => {}}
        backButtonText="Back To Basic Info"
        saveButtonText="Add"
        heading="Add Organizer Profile"
        handleCancelClick={() => setCurrentPage('preview')}
      />

      <ShowCaseYourEvents />
      {/* <OrganizationDetailsForm /> */}
      <div className="file-wrapper">
        <div className="child-Filewrapper">
          <div>
            <LabelWithTag label="Your logo" />
            <UploadFile />
          </div>
          <div>
            <LabelWithTag label="Your Cover Photo" />
            <UploadFile buttonType="large" />
          </div>
        </div>
        <div>
          <LabelWithTag label="Your Additinoal Photos" tagType="Recomended" />
          <UploadFile buttonType="large" />
        </div>
      </div>

      <Formik
        initialValues={{
          organizerBio: '',
          organizerDescription: '',
          facebookLink: '',
          twitterLink: '',
          instagramLink: '',
          youtubeLink: '',
        }}
        onSubmit={handleProfileForm}
      >
        {() => (
          <Form>
            <div>
              <LabelWithTag
                label="Organizer Bio"
                description="Describe who you are, the types of events you host, or your mission. The bio is displayed on your organizer profile."
              />
              <InputBox
                radiusType="27px"
                height="118px"
                width="1380px"
                name="name"
                placeholder="Enter Your name here"
              />
            </div>
            <div className="attributes-wrapper">
              <LabelWithTag
                label="Amenities"
                description="Help users know what to expect at your venue."
                tagType="none"
              />
              <div className="list-wrapper">
                {attributesList.map((index) => {
                  return (
                    <InputCheckbox
                      name={index.name}
                      onClick={() => {}}
                      className=""
                      label={index.name}
                      isCorrectOption={true}
                    />
                  )
                })}
              </div>
            </div>
            <div className="saftey-policies-wrapper">
              <LabelWithTag
                label="Safety & Cleanliness"
                description="Let members know what your Vaccination Policies are, if they need to bring proof, and how this impacts other measures (eg. if vaccinated members can attend without a mask)."
                tagType="Recomended"
              />
              <div className="policy-list">
                {policies.map((index) => {
                  return (
                    <InputCheckbox
                      name={index.name}
                      onClick={() => {}}
                      className=""
                      label={index.name}
                      isCorrectOption={true}
                    />
                  )
                })}
              </div>
            </div>

            <div className="social-media-wrapper">
              <ContentHeader
                heading="Social Media & Marketing Link"
                description="Let attendees know how to connect with you"
              />

              <div className="socialMedia-wrapper">
                <LabelWithTag
                  label="Social Media & Marketing Links"
                  description="Let attendees know how to connect with you."
                  tagType="Recomended"
                />
                <div className="socialLinks-wrapper">
                  <InputBox
                    name="social.phoneNumber"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Phone Number"
                  />
                  <InputBox
                    name="social.facebook"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="FaceBook"
                  />
                  <InputBox
                    name="social.instagram"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Instagram"
                  />
                  <InputBox
                    name="social.twitter"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Twitter"
                  />
                  <InputBox
                    name="social.youtube"
                    label="Youtube"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </OrganizationProfileFormStyle>
  )
}

export default OrganizationProfileForm
