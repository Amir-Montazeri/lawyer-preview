import { ForbiddenComponentsController } from '@/components';

function Booking() {
  return (
    <ForbiddenComponentsController
      allowOnlyUsers={true}
      userInformation={{
        first_name: 'amir',
        last_name: 'montazeri',
        email: 'm3amir88@yahoo.com',
        phone_number: '9107798591',
      }}
    >
      <div>Booking</div>
    </ForbiddenComponentsController>
  );
}

export default Booking;
