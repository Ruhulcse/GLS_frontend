import useAuth from '@/hooks/useAuth'
import useAuthChecked from '@/hooks/useAuthChecked';
import React from 'react'

function Text() {
    const auth = useAuthChecked()
    console.log(auth);
  return (
    <div>Text</div>
  )
}

export default Text