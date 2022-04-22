import express from "express";
import { paginaInicio, paginaNosotros, paginaTestimonios, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialControlle.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimonios);
router.post('/testimoniales', guardarTestimonial)

export default router