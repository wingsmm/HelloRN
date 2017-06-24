//
//  ViewController.m
//  RNApp
//
//  Created by ZhangBo on 2017/6/23.
//  Copyright © 2017年 ZhangBo. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
  
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


-(void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event{
    RNViewController * rn = [RNViewController new];
    [self.navigationController pushViewController:rn animated:YES];
}

@end
