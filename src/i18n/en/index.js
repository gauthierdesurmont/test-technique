// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  mainTitle: 'Find your lovely apartment',
  mainText:
    'Bienvenue sur ce test technique, vous aurez pour mission de retrouver les bugs que nous vous avons lister, bon courage !',
  labelBorough: 'Où souhaitez-vous vivre ?',
  bedrooms: ({plural}) => plural(['Bedroom', 'Bedrooms']),
}
