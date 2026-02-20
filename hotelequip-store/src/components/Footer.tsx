import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Shield,
  Headphones,
  CreditCard,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Trust Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Envio Gratuito</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  Em compras superiores a 500&euro;
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Garantia 1 Ano</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  Contra defeitos de fabrico
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Suporte Online</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  Segunda a Sexta, 9h-18h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Pagamento Seguro</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  MB Way, Multibanco, Visa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">H</span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">
                  Hotelequip
                </span>
                <span className="text-accent text-lg font-bold">.pt</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              A sua loja online de equipamentos hoteleiros profissionais.
              Qualidade, variedade e preços competitivos para restaurantes,
              hotéis e cafés.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">
              Categorias
            </h4>
            <ul className="space-y-2.5">
              {[
                "Confeção",
                "Frio Comercial",
                "Lavagem",
                "Máquinas de Gelo",
                "Preparação",
                "Bar & Cafetaria",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categoria/${cat.toLowerCase().replace(/[&\s]+/g, "-")}`}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">
              Ajuda
            </h4>
            <ul className="space-y-2.5">
              {[
                "Condições de Envio",
                "Política de Devoluções",
                "Garantia",
                "Métodos de Pagamento",
                "Perguntas Frequentes",
                "Termos e Condições",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">
              Contactos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+351000000000"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  800 000 000 (Chamada gratuita)
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hotelequip.pt"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@hotelequip.pt
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  Portugal Continental e Ilhas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Hotelequip.pt - Todos os direitos reservados</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/60 transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="hover:text-white/60 transition-colors">
                Cookies
              </Link>
              <Link href="#" className="hover:text-white/60 transition-colors">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
