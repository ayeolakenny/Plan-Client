import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { InputField } from '../../components/custom/InputField'
import {
  FindUserEventTypesDocument,
  useCreateEventTypeMutation,
  useMeQuery,
} from '../../generated/graphql'
import * as yup from 'yup'
import { toErrorMap } from '../../helpers/toErrorMap'

const NewEvent = () => {
  const router = useRouter()

  const { data: loggedInUser, loading } = useMeQuery()

  if (!loggedInUser?.me && !loading) router.replace('/login')

  const [createEvent] = useCreateEventTypeMutation({
    refetchQueries: [{ query: FindUserEventTypesDocument }],
  })

  const validationSchema = yup.object({
    title: yup.string().required('title is required'),
    description: yup.string().required('description is required'),
    length: yup.number().required('length is required'),
  })

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-lg rounded-lg bg-white px-10 py-8 shadow-xl">
        <div className="mx-auto max-w-md space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Add new event type</h2>
            <p className="my-4 opacity-70">
              Create a new event type for people to book times with.
            </p>
            <Formik
              validateOnChange={true}
              initialValues={{
                title: '',
                description: '',
                length: 0,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                setSubmitting(true)
                try {
                  await createEvent({
                    variables: {
                      ...values,
                    },
                  })
                  router.push('/events/all')
                } catch (err: any) {
                  console.error(err)
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mt-8 space-y-6">
                    <div className="space-y-1 rounded-md shadow-sm">
                      <div>
                        <InputField
                          name="title"
                          placeholder="title"
                          label="Title"
                          type="text"
                        />
                      </div>
                      <div>
                        <InputField
                          name="description"
                          placeholder="description"
                          label="Description"
                          type="text"
                        />
                      </div>
                      <div>
                        <InputField
                          name="length"
                          placeholder="length"
                          label="Length"
                          type="number"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {isSubmitting ? (
                          <span className="loader mr-3"></span>
                        ) : (
                          <span>Create</span>
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEvent
