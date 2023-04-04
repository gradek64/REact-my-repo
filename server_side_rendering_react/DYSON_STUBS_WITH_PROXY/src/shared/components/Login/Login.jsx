import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field/Field';
import { queryParamsReducer } from '../../../reducers';

const emailField = (emailAddress) => (
  <Field
    type='email'
    id='email'
    name='logonId'
    label='Email address'
    defaultValue={emailAddress}
    autoComplete='email'
    maxLength='60'
    data-track-config='trolleySignInField_errorMessage|Trolley SignIn Field Error Message'
    autoFocus
  />
);

const signedInUserEmailField = (emailAddress) => (
  <div>
    <div className='xs-row xs-12--none'>
      <div className='xs-stack'>
        <p data-e2e='email-address-label'>{emailAddress}</p>
        <button
          kind='link'
          type='submit'
          formAction='?logOff=true&amp;redirectToReferer=true'
          formNoValidate
          data-e2e='not-you-link'
          id='notYouLink'
          data-track-click='trolleySignIn_notYou|TrolleySignIn Not You'
        >
          Not you?
        </button>
      </div>
    </div>
    <Field
      type='hidden'
      name='logonId'
      id='email'
      defaultValue={emailAddress}
    />
  </div>
);

const Login = ({
  logonId,
  logonPassword,
  error,
  recognised = false,
  pageName = 'unknown',
  emailAddress = '',
  successUrl,
  brand = 'arg',
  allowGuest = false,
}) => {
  const registerAndGuestOnTop = true;

  const queryParams = [
    recognised ? 'logOff=true' : null,
    allowGuest ? 'allowGuest=true' : null,
    `pageName=${pageName}`,
    successUrl ? `successUrl=${encodeURIComponent(successUrl)}` : null,
  ];
  const queryString = queryParams.reduce(queryParamsReducer, '');
  const registerLink = `/register${queryString}`;

  const guestCheckoutLink = `${successUrl}${
    successUrl && successUrl.indexOf('?') > -1 ? '&' : '?'
  }guest=true`;

  const apiError =
    error &&
    error(
      'trolleySignInSystem_errorMessage|Trolley SignIn System Error Message'
    );
  const passwordFieldHintText =
    (apiError && 'Hint - this includes 2 letters and 1 number') || '';
  const headingText = recognised ? 'Please sign in again' : 'Sign in';

  const getBrandClassName = (currentBrand) =>
    currentBrand === 'arg' ? '' : ` ${currentBrand}-variation`;

  const RegisteredSection = () => (
    <section data-test='forms-registered-user-section'>
      <h1 className='h2 text-center bold' data-e2e='login-page-title'>
        {headingText}
      </h1>
      {apiError}
      {brand === 'hab' && (
        <p className='text-center'>
          Sign in to your Argos account or create a new one, then we&apos;ll
          take you to check out.
        </p>
      )}
      <form method='post' noValidate className='form-group'>
        {!recognised && emailField(logonId)}
        {recognised && emailAddress && signedInUserEmailField(emailAddress)}
        <div>
          <Field
            type='password'
            id='password'
            name='logonPassword'
            label='Password'
            defaultValue={logonPassword}
            autoComplete='password'
            maxLength='60'
            className={`hasShowHide${getBrandClassName(brand)}`}
            data-track-config='trolleySignInField_errorMessage|Trolley SignIn Field Error Message'
            hintText={passwordFieldHintText}
          />
          <p>
            <button
              kind='link'
              as='a'
              href='/forgotten-password'
              className='button-link'
              data-e2e='forgot-password-link'
              data-track-click='trolleySignIn_forgotPassword|TrolleySignIn Forgot Password'
            >
              Forgotten your password?
            </button>
          </p>
        </div>
        <button
          type='submit'
          hasLoading
          data-e2e='login-submit-button'
          data-track-submit='trolleySignIn_signIn|TrolleySignIn SignIn'
          full
        >
          Sign in securely
        </button>
      </form>
    </section>
  );

  const RegisterAndGuestSection = () => (
    <section data-test='forms-new-customers-section'>
      <h1 className='h2 text-center bold' data-e2e='login-page-title'>
        New Customers
      </h1>
      <form>
        <p className='form-cta font-bold text-center'>newCustomer</p>
        <div className='new-customer-cta-wrapper'>
          <button
            hasLoading
            as='a'
            kind='secondary'
            data-btn-with-loading
            data-e2e='register-link'
            href={registerLink}
            full
            data-track-click='trolleySignIn_register|TrolleySignin Register'
          >
            Create an account
          </button>
          {allowGuest && (
            <button
              as='a'
              kind='secondary'
              hasLoading
              data-btn-with-loading
              data-e2e='guest-checkout-link'
              href={guestCheckoutLink}
              full
              data-track-click='trolleySignIn_interaction|Trolley SignIn Continue As a Guest Button|trolley:accountSignIn:continueasaguestbutton'
            >
              Continue as a guest
            </button>
          )}
        </div>
      </form>
    </section>
  );

  const LoginForms = [<RegisterAndGuestSection />, <RegisteredSection />];
  return (
    <div data-test='login-forms'>
      {!registerAndGuestOnTop ? LoginForms.reverse() : LoginForms}
    </div>
  );
};

Login.propTypes = {
  error: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  logonId: PropTypes.string,
  logonPassword: PropTypes.string,
  recognised: PropTypes.bool,
  emailAddress: PropTypes.string,
  pageName: PropTypes.string,
  successUrl: PropTypes.string,
  brand: PropTypes.oneOf(['arg', 'hab', 'tuc']),
  allowGuest: PropTypes.bool,
};

export default Login;
