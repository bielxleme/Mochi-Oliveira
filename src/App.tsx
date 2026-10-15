import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Quote,
  X,
} from 'lucide-react';

const whatsappUrl = 'https://api.whatsapp.com/send?text=Olá!%20Gostaria%20de%20conhecer%20a%20Mochi%20e%20Oliveira.';
const instagramUrl = 'https://www.instagram.com/mochieoliveira/';

const images = {
  hero: 'https://images.pexels.com/photos/8251693/pexels-photo-8251693.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  bed: 'https://images.pexels.com/photos/4271665/pexels-photo-4271665.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  curtains: 'https://images.pexels.com/photos/7114134/pexels-photo-7114134.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  detail: 'https://images.pexels.com/photos/10554480/pexels-photo-10554480.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  room: 'https://images.pexels.com/photos/6207825/pexels-photo-6207825.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
};

const collections = [
  {
    number: '01',
    title: 'Cama &\nConforto',
    description: 'Lençóis de alta durabilidade, toque aconchegante e fronhas impecáveis para noites que abraçam.',
    image: images.bed,
    className: 'collection-card-large',
  },
  {
    number: '02',
    title: 'Cortinas &\nAmbientes',
    description: 'Modelos que filtram a luz e vestem a casa com elegância, leveza e personalidade.',
    image: images.curtains,
    className: '',
  },
  {
    number: '03',
    title: 'Enxovais &\nDetalhes',
    description: 'Peças escolhidas para completar a atmosfera e transformar cada canto do seu lar.',
    image: images.detail,
    className: '',
  },
];

const features = [
  ['01', 'Confecção própria', 'Cada peça nasce dentro da nossa casa, com cuidado em todas as etapas.'],
  ['02', 'Tecidos selecionados', 'Texturas, caimentos e acabamentos pensados para durar e encantar.'],
  ['03', 'Atendimento próximo', 'A gente escuta, entende e ajuda você a encontrar o detalhe certo.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Mochi e Oliveira - início">
          <span className="brand-mark">M<span>&</span>O</span>
          <span className="brand-name">Mochi <i>&</i> Oliveira</span>
        </a>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#colecoes" onClick={closeMenu}>Coleções</a>
          <a href="#cortinas" onClick={closeMenu}>Cortinas</a>
          <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={16} /> Fale no WhatsApp
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Desde 2016, em Borborema</p>
          <h1>Transforme sua casa no seu <em>refúgio</em> favorito.</h1>
          <p className="hero-description">Qualidade, toque macio e carinho em cada detalhe. Confeccionamos lençóis, fronhas e cortinas que valorizam o seu ambiente.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#colecoes">Ver coleção completa <ArrowUpRight size={17} /></a>
            <a className="button button-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Pedir orçamento</a>
          </div>
          <div className="hero-note"><span className="note-dot" /> Feito com cuidado para o seu lar</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={images.hero} alt="Quarto iluminado com roupa de cama em tons naturais" /></div>
          <div className="hero-stamp"><span>CONFECÇÃO</span><strong>M&O</strong><span>PRÓPRIA</span></div>
          <div className="hero-caption"><span>01 / 04</span><span className="caption-line" /><span>coleção casa</span></div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <p className="eyebrow"><span className="eyebrow-line" /> O prazer de chegar em casa</p>
        <div className="intro-grid">
          <h2>O toque que transforma <em>tudo.</em></h2>
          <div className="intro-text"><p>Uma casa acolhedora começa pelos detalhes que a gente sente. Na Mochi & Oliveira, criamos peças que unem beleza, conforto e a delicadeza de quem conhece cada etapa da confecção.</p><a className="text-link" href="#sobre">Conheça a nossa história <ArrowDownRight size={16} /></a></div>
        </div>
      </section>

      <section className="collections-section section-pad" id="colecoes">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> Nossas escolhas</p><h2>Para cada canto, <em>um cuidado.</em></h2></div><span className="section-index">/ 03 categorias</span></div>
        <div className="collections-grid">
          {collections.map((collection) => <a id={collection.number === '02' ? 'cortinas' : undefined} className={`collection-card ${collection.className}`} href={collection.title.startsWith('Cortinas') ? '#cortinas' : whatsappUrl} target={collection.title.startsWith('Cortinas') ? undefined : '_blank'} rel={collection.title.startsWith('Cortinas') ? undefined : 'noreferrer'} key={collection.number}><img src={collection.image} alt={collection.title.replace('\n', ' ')} /><div className="card-overlay" /><div className="collection-content"><span className="card-number">{collection.number}</span><h3>{collection.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3><p>{collection.description}</p><span className="round-arrow"><ArrowUpRight size={19} /></span></div></a>)}
        </div>
      </section>

      <section className="story-section section-pad" id="sobre">
        <div className="story-image"><img src={images.room} alt="Ambiente acolhedor com cama e cortinas claras" /><span className="image-label">Borborema, São Paulo<br /><b>desde 2016</b></span></div>
        <div className="story-copy"><p className="eyebrow"><span className="eyebrow-line" /> Tradição e cuidado</p><h2>Feito perto.<br /><em>Feito para durar.</em></h2><p className="story-lead">A Mochi & Oliveira nasceu com um propósito simples: levar mais conforto e beleza para dentro das casas.</p><p>Desde 18 de outubro de 2016, nossa confecção própria transforma tecidos em peças que acompanham histórias. Estamos no coração de Borborema, cuidando de cada pedido de um jeito próximo, atento e verdadeiro.</p><a className="button button-outline" href={instagramUrl} target="_blank" rel="noreferrer">Acompanhe no Instagram <Instagram size={17} /></a></div>
      </section>

      <section className="features-section section-pad"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> O nosso jeito</p><h2>Detalhes que fazem <em>diferença.</em></h2></div></div><div className="features-grid">{features.map(([number, title, text]) => <div className="feature" key={number}><span className="feature-number">{number}</span><div className="feature-icon"><Check size={19} /></div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="quote-section"><Quote size={31} strokeWidth={1} /><blockquote>“Qualidade e carinho para o seu lar. Lençóis, cortinas e itens que transformam seu ambiente.”</blockquote><span>— A essência Mochi & Oliveira</span></section>

      <section className="faq-contact section-pad" id="contato"><div className="faq-column"><p className="eyebrow"><span className="eyebrow-line" /> Ficou com alguma dúvida?</p><h2>Vamos conversar<br /><em>com calma.</em></h2><div className="faq-list">{['Vocês fazem peças sob medida?', 'Como funciona o orçamento?', 'Onde encontro a Mochi & Oliveira?'].map((question, index) => <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={question}><button type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{question}</span>{activeFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button>{activeFaq === index && <p>{index === 0 ? 'Sim. Fale com a gente pelo WhatsApp para conversarmos sobre medidas, tecidos e possibilidades.' : index === 1 ? 'Você nos conta o que procura, enviamos as opções e montamos uma proposta pensada para o seu ambiente.' : 'Estamos na Rua Ipiranga, 73, no Centro de Borborema. Será um prazer receber você.'}</p>}</div>)}</div></div><div className="contact-card"><span className="contact-card-top">Mochi & Oliveira</span><h3>Seu próximo<br /><em>cantinho favorito</em><br />começa aqui.</h3><a className="button button-cream" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com a gente</a><div className="contact-links"><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> @mochieoliveira</a><span><MapPin size={16} /> Borborema · SP</span></div></div></section>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark">M<span>&</span>O</span><span className="brand-name">Mochi <i>&</i> Oliveira</span></a><p>Qualidade e carinho<br />para o seu lar.</p></div><div className="footer-info"><div><span>Endereço</span><p>Rua Ipiranga, 73 — Centro<br />Borborema — SP · 14955-000</p></div><div><span>Informações</span><p>Mochi e Oliveira Confecções Ltda<br />CNPJ 26.374.680/0001-05</p></div><div><span>Fale com a gente</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© 2026 Mochi & Oliveira. Todos os direitos reservados.</span><span>Feito com cuidado.</span></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}

export default App;
