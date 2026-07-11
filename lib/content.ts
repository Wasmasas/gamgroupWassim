import {
  Boxes,
  Cloud,
  Cpu,
  Database,
  LineChart,
  Lock,
  Network,
  Workflow,
} from 'lucide-react'

export const stats = [
  { value: '20+', label: 'Anni di esperienza' },
  { value: '150+', label: 'Progetti consegnati' },
  { value: '40+', label: 'Clienti attivi' },
  { value: '4', label: 'Settori verticali' },
]

export const services = [
  {
    icon: Network,
    title: 'System Integration',
    description:
      'Integriamo sistemi, applicazioni e dati eterogenei in un ecosistema unico, fluido e affidabile.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Migrazione, gestione e ottimizzazione di infrastrutture cloud e ibride scalabili e sicure.',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description:
      'Trasformiamo i dati in decisioni: data warehouse, business intelligence e dashboard su misura.',
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description:
      'Accompagniamo le imprese nel percorso di innovazione tecnologica e di processo end-to-end.',
  },
  {
    icon: Workflow,
    title: 'Software su Misura',
    description:
      'Progettiamo e sviluppiamo applicazioni gestionali e web calibrate sui vostri processi.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description:
      'Proteggiamo dati, reti e applicazioni con un approccio proattivo alla sicurezza informatica.',
  },
]

export const industries = [
  {
    slug: 'automotive',
    name: 'Automotive',
    image: '/images/automotive.png',
    tagline: 'Filiera connessa e produzione intelligente',
    description:
      'Digitalizzazione della supply chain, tracciabilità e integrazione MES per una produzione più efficiente e reattiva.',
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    image: '/images/fashion.png',
    tagline: 'Dal design al retail, senza attriti',
    description:
      'PLM, gestione collezioni e omnicanalità per portare i prodotti sul mercato più velocemente.',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    image: '/images/manufacturing.png',
    tagline: 'Industria 4.0 concreta',
    description:
      'Automazione, monitoraggio real-time e integrazione tra impianti, ERP e sistemi gestionali.',
  },
  {
    slug: 'farmaceutico',
    name: 'Farmaceutico',
    image: '/images/pharma.png',
    tagline: 'Qualità, compliance e tracciabilità',
    description:
      'Soluzioni conformi alle normative con validazione dei processi e gestione documentale sicura.',
  },
]

export const values = [
  {
    icon: Boxes,
    title: 'Capitale umano',
    description:
      'Un team di specialisti con anni di esperienza: le persone sono il nostro vero punto di forza.',
  },
  {
    icon: LineChart,
    title: 'Approccio su misura',
    description:
      'Nessuna soluzione preconfezionata. Ci adattiamo alle esigenze specifiche di ogni settore.',
  },
  {
    icon: Network,
    title: 'Rete di partner',
    description:
      'Una rete strategica radicata nel territorio per offrire competenze complete e affidabili.',
  },
]

export const clients = [
  'Rossi Industriale',
  'Veneta Motori',
  'Nord Tessile',
  'PharmaLab',
  'Adriatica Group',
  'Meccanica Piave',
  'Moda Nova',
  'Sistemi Alpini',
]
