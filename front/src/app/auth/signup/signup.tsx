import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/app/components/button/button';
import { GuestGuard } from 'src/app/components/guard/guest-guard';
import { Input } from 'src/app/components/input/input';
import { H2 } from 'src/app/components/typography/typography';
import { Loading } from 'src/app/components/loading/loading';
import { useSignup } from './use-signup';
import { ROUTES } from 'src/app/routes';

export function Signup({}: SignupProps) {
  const { loading, error, onSubmit, register } = useSignup();

  return (
    <GuestGuard>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <H2 className="mt-10 text-center tracking-tight text-gray-900">
            Slack Clone
          </H2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="post" className="space-y-6" onSubmit={onSubmit()}>
            <Input
              type="text"
              id="name"
              placeholder="exemple"
              label="Nom :"
              {...register('name', { required: true })}
            />
            <Input
              type="email"
              id="email"
              placeholder="exemple@gmail.com"
              label="Email :"
              {...register('email', { required: true })}
            />
            <Input
              type="password"
              id="password"
              label="Mot de passe :"
              {...register('password', { required: true })}
            />

            {error && <p className="text-red-500">Email déjà existant</p>}

            <div>
              <Button className="w-full">S'inscrire</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm">
            <Link
              to={ROUTES.login()}
              className="font-semibold leading-6  text-secondary"
            >
              Déjà un compte?
            </Link>
          </p>
        </div>
      </div>
      {loading && <Loading />}
    </GuestGuard>
  );
}

type SignupProps = PropsWithChildren<{}>;
