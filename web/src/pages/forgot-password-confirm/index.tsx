/**
 * Panther is a scalable, powerful, cloud-native SIEM written in Golang/React.
 * Copyright (C) 2020 Panther Labs Inc
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import Banner from 'Assets/sign-up-banner.jpg';
import AuthPageContainer from 'Components/auth-page-container';
import queryString from 'query-string';
import ForgotPasswordConfirmForm from 'Components/forms/forgot-password-confirm-form';
import useRouter from 'Hooks/useRouter';

const ForgotPasswordConfirmPage: React.FC = () => {
  const { location } = useRouter();

  // protect against not having the proper parameters in place
  const { email, token } = queryString.parse(location.search) as { email: string; token: string };
  if (!token || !email) {
    return (
      <AuthPageContainer banner={Banner}>
        <AuthPageContainer.Caption
          title="Something seems off..."
          subtitle="Are you sure that the URL you followed is valid?"
        />
      </AuthPageContainer>
    );
  }

  return (
    <AuthPageContainer banner={Banner}>
      <AuthPageContainer.Caption
        title="Alrighty then.."
        subtitle="Let's set you up with a new password."
      />
      <ForgotPasswordConfirmForm email={email} token={token} />
    </AuthPageContainer>
  );
};

export default ForgotPasswordConfirmPage;
