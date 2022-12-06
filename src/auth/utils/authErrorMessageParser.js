export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi';
    case 'auth/user-disabled':
      return 'Bu hesap devre dışı bırakıldı';
    case 'auth/user-not-found':
      return 'Bu e-posta adresiyle kayıtlı bir hesap bulunamadı';
    case 'auth/wrong-password':
      return 'Kullanıcı adı veya şifre hatalı';
    case 'auth/email-already-in-use':
      return 'Bu e-posta adresi zaten kullanılıyor';
    case 'auth/operation-not-allowed':
      return 'Bu işlem şu anda devre dışı';
    case 'auth/weak-password':
      return 'Şifreniz en az 6 karakter olmalıdır';
    case 'auth/null-value':
      return 'Lütfen tüm alanları doldurunuz';
    default:
      return 'Bir hata oluştu';
  }
}
