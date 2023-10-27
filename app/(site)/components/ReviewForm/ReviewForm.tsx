import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import CloseIcon from './close.svg'
import cn from 'classnames'
import { Input } from '../Input/Input'
import Rating from '../Rating/Rating'
import { Textarea } from '../Textarea/Textarea'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm } from './ReviewForm.interface'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { PagesData } from '@/interfaces/page.interface'

export const ReviewForm = ({
  productId,
  isOpened,
  setIsReviewOpened,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>()

  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  function newComment(formData: IReviewForm) {
    const newCom = {
      name: formData.name,
      title: formData.title,
      description: formData.description,
      createdAt: new Date().toJSON().toString(),
      rating: formData.rating,
    }
    return newCom
  }

  function saveUpdatedData(updatedData: IReviewForm) {
    fetch('/api/updateData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSuccess(true)
          reset()
          setIsReviewOpened(true)
        } else {
          setError('Что-то пошло не так')
        }
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  const onSubmit = async (formData: IReviewForm) => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        const pageToUpdate = data.pages.find((page: PagesData) => page.alias === productId)

        if (pageToUpdate) {
          pageToUpdate.reviews.push(newComment(formData))

          saveUpdatedData(data)
        } else {
          console.log('Object with entered alias not founded')
        }
      })
      .catch((error) => {
        console.error('Error of downloading of JSON-file:', error)
      })
  }

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.headers}>Stay Comment:</div>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Fill in the Name' } })}
          placeholder="Name"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Fill in the title' } })}
          placeholder="Title of Review"
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Rating:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Fill in the rating' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
          {errors.rating && <span className={styles.errorText}>{errors.rating.message}</span>}
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Fill in description' },
          })}
          placeholder="Text of review"
          className={styles.description}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label="Text of review"
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>
            Send
          </Button>
          <span className={styles.info}>
            * Before publication, the review will be pre-moderated and checked
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)} role="alert">
          <div className={styles.successTitle}>Your review has been sent</div>
          <div>Thank you, your review will be published after verification.</div>
          <button
            onClick={() => setIsSuccess(false)}
            className={styles.close}
            aria-label="Close Alert">
            <CloseIcon />
          </button>
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)} role="alert">
          Something went wrong, try refreshing the page
          <button
            onClick={() => setError(undefined)}
            className={styles.close}
            aria-label="Close Alert">
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  )
}
