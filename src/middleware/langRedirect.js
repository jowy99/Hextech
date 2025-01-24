export async function onRequest({ request, redirect }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Idiomas soportados
  const supportedLanguages = ['es', 'en'];

  // Verifica si el idioma ya está presente en la URL
  const hasLang = supportedLanguages.some((lang) =>
    pathname.startsWith(`/${lang}`)
  );

  // Si no tiene idioma y está en la raíz, redirige a /es
  if (!hasLang && pathname === '/') {
    return redirect('/en', 302);
  }

  // Si no hay coincidencia con rutas válidas, deja que Astro maneje la solicitud
  return new Response(null, { status: 200 }); // Asegúrate de que esto no rompa rutas dinámicas
}