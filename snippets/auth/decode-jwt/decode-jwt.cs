public static string DecodeJwt(string token) {
  return new JwtSecurityTokenHandler().ReadJwtToken(token).ToString();
}
