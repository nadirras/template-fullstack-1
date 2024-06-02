import { Router } from "express";

export class ApiRouter {
  //   private sampleRouter: SampleRouter;
  private router: Router;

  constructor() {
    this.router = Router();
    // this.sampleRouter = new SampleRouter();
  }

  private initializeRoutes(): void {
    // this.router.use('/sample', this.sampleRouter.getRouter());
  }

  getRouter() {
    return this.router;
  }
}
