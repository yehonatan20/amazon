import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

const MessageBox = ({children, variant}) => {
  return (
    <Alert variant={variant || 'info'}>
        {children}
    </Alert>
  )
}

export default MessageBox;

MessageBox.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string
}