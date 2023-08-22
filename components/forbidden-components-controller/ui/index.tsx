'use client';

import { useUserStore } from '@/store';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';

function ForbiddenComponentsController({
  children,
  allowOnlyUsers,
  ifForbidden,
}: ForbiddenComponentsControllerPropsTypes) {
  const { getUser, addUserInformation } = useUserStore(),
    [renderIsAllowed, setRenderIsAllowed] = useState<boolean>();

  useLayoutEffect(() => {
    if (allowOnlyUsers && getUser.email.length > 0) {
      setRenderIsAllowed(true);
    }
  }, [getUser]);

  return renderIsAllowed ? (
    children
  ) : (
    <div>
      not allowed! <br />
      <button
        onClick={() => addUserInformation('email', 'mas')}
        className="bg-red-600"
      >
        Set User!
      </button>
      <br />
      <Link href={'/'} className="bg-blue-700">
        Home?
      </Link>
    </div>
  );
}

export default ForbiddenComponentsController;
